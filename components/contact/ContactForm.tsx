"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import axios, { AxiosError } from "axios";
import { Section } from "@/components/shared/Section";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  curso: string;
  mensagem: string;
}

interface ErrorResponse {
  mensagem?: string;
}

export function ContactForm() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [curso, setCurso] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const formData = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const datas: FormData = {
      nome,
      email,
      telefone,
      curso,
      mensagem,
    };

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post("/userContact", datas);

      setSuccess(true);

      setNome("");
      setEmail("");
      setTelefone("");
      setCurso("");
      setMensagem("");

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      setError(
        error.response?.data?.mensagem || "Erro ao enviar o formulário!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contato"
      className="bg-white dark:bg-dark-bg contactform-scope"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Fale com a Ar Studio</h2>
            <p className="text-xl">
              Quer construir um sistema web, integrarar APIs ou melhorar sua
              presença online? Conte-nos sobre o seu projeto — retornamos em até
              24 horas úteis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formulário */}
            <div className="bg-gray-50 rounded-lg p-8 dark:bg-dark-card">
              <form onSubmit={formData} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={nome}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "
                    placeholder="Seu nome"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setNome(e.target.value);
                    }}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    className="w-full  px-4 py-3 border border-gray-300 rounded-lg "
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block font-medium mb-2">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={telefone}
                    className="w-full  px-4 py-3 border border-gray-300 rounded-lg "
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setTelefone(e.target.value);
                    }}
                    placeholder="(71) 99999-9999"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="curso" className="block font-medium mb-2">
                    Serviço de interesse
                  </label>
                  <select
                    id="servico"
                    name="servico"
                    value={curso}
                    className="w-full px-4 py-3 dark:bg-dark-card border border-gray-300 rounded-lg "
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                      setCurso(e.target.value);
                    }}
                    required
                  >
                    <option value="" className="text- dark:text-[#E2DFD2]">
                      Selecione o serviço
                    </option>
                    <option value="puncao">
                      Desenvolvimento Web (React / Next.js)
                    </option>
                    <option value="curativos">Design de Interface & UX</option>
                    <option value="medicamentos">
                      Administração de Medicamentos
                    </option>
                    <option value="fundamentos">
                      Fundamentos e Cuidados Básicos
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    value={mensagem}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                      setMensagem(e.target.value);
                    }}
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full text-white py-4 rounded-lg font-semibold text-lg hover:scale-103 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>

              {success && (
                <div className="mt-2 ml-6 p-4 bg-green-100 text-green-700 rounded-lg w-80">
                  ✓ Mensagem enviada com sucesso!
                </div>
              )}

              {error && (
                <div className="mt-2 ml-6 p-4 bg-red-100 text-red-700 rounded-lg">
                  ✗ {error}
                </div>
              )}
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Outras Formas de Contato
                </h3>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5571999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-6 whatsapp rounded-lg transition group"
              >
                <div className="text-3xl mr-4">💬</div>
                <div>
                  <h4 className="font-semibold mb-1 group-hover:text-green-600">
                    WhatsApp
                  </h4>
                  <p className="">(71) 99999-9999</p>
                  <p className="text-sm  mt-1">
                    Clique para conversar diretamente
                  </p>
                </div>
              </a>

              {/* E-mail */}
              <div className="flex items-start p-6 rounded-lg email">
                <div className="text-3xl mr-4">📧</div>
                <div>
                  <h4 className="font-semibold mb-1">E-mail</h4>
                  <a
                    href="mailto:contato@exemplo.com"
                    className="text-blue-600 hover:underline"
                  >
                    contato@exemplo.com
                  </a>
                  <p className="text-sm mt-1">Respondemos em até 24h</p>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-start p-6 rounded-lg contact-card">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h4 className="font-semibold mb-1">Localização</h4>
                  <p className="">Salvador, Bahia</p>
                  <p className="text-sm mt-1">Cursos presenciais na região</p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start p-6  rounded-lg contact-card">
                <div className="text-3xl mr-4">⏰</div>
                <div>
                  <h4 className="font-semibold mb-1">Horário de Atendimento</h4>
                  <p className="text-">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-">Sábados: 9h às 13h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
