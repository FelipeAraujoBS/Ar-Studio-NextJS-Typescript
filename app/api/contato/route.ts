import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Interfaces
interface ContactRequestBody {
  nome: string;
  email: string;
  telefone: string;
  servico: string;
  mensagem?: string;
}

interface ServicosNomes {
  [key: string]: string;
}

// Inicializar Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // 1. Pegar dados do body
    const body = (await request.json()) as ContactRequestBody;

    // 2. Validar campos obrigatórios
    const { nome, email, telefone, servico, mensagem } = body;

    if (!nome || !email || !telefone || !servico) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    // 3. Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // 4. Mapear nome do serviço
    const servicoNomes: ServicosNomes = {
      sistemas: "Desenvolvimento Web (React / Next.js / Nest.js / Node)",
      ecommerce: "Desenvolvimento de e-commerce (Shopify / WooCommerce)",
      landing: "Criação de Landing Page",
      institucional: "Criação de sites institucionais",
      apis: "Desenvolvimento de APIs e Back-end",
      outros: "Outros Serviços",
    };

    const servicoNome = servicoNomes[servico] || servico;

    // 5. Enviar email via Resend
    const { data, error } = await resend.emails.send({
      from: "Ar Studio <onboarding@resend.dev>",
      to: ["seuemail@example.com"], // ← MUDE PARA O SEU EMAIL
      replyTo: email,
      subject: `Novo Contato: ${nome} - ${servicoNome}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .info-row { margin: 15px 0; padding: 10px; background: white; border-radius: 6px; }
              .label { font-weight: bold; color: #2563EB; }
              .value { margin-top: 5px; }
              .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">📬 Novo Contato Recebido</h2>
              </div>
              <div class="content">
                <p>Você recebeu um novo contato através do site:</p>
                
                <div class="info-row">
                  <div class="label">👤 Nome:</div>
                  <div class="value">${nome}</div>
                </div>

                <div class="info-row">
                  <div class="label">📧 Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>

                <div class="info-row">
                  <div class="label">📱 Telefone/WhatsApp:</div>
                  <div class="value"><a href="https://wa.me/55${telefone.replace(
                    /\D/g,
                    ""
                  )}">${telefone}</a></div>
                </div>

                <div class="info-row">
                  <div class="label">📚 Serviço de Interesse:</div>
                  <div class="value">${servicoNome}</div>
                </div>

                ${
                  mensagem
                    ? `
                  <div class="info-row">
                    <div class="label">💬 Mensagem:</div>
                    <div class="value">${mensagem}</div>
                  </div>
                `
                    : ""
                }

                <div style="margin-top: 30px; padding: 15px; background: #EFF6FF; border-left: 4px solid #2563EB; border-radius: 4px;">
                  <strong>🎯 Ação Recomendada:</strong><br>
                  Responda o mais rápido possível para não perder o lead! Clique no WhatsApp acima para entrar em contato.
                </div>
              </div>
              <div class="footer">
                <p>Este email foi enviado automaticamente pelo sistema de contatos do site.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // 6. Verificar se houve erro no envio
    if (error) {
      console.error("❌ Erro ao enviar email:", error);
      return NextResponse.json(
        { error: "Erro ao enviar email" },
        { status: 500 }
      );
    }

    // 7. Log de sucesso
    console.log("✅ Email enviado com sucesso:", data);

    // 8. Retornar sucesso
    return NextResponse.json(
      {
        success: true,
        message:
          "Contato recebido com sucesso! Entraremos em contato em breve.",
        emailId: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erro na API:", error);
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "API de contato funcionando!",
    resendConfigured: !!process.env.RESEND_API_KEY,
  });
}
