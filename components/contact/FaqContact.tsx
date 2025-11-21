"use client";

import { useState } from "react";
import { Section } from "@/components/shared/Section";
import FaqItem from "@/components/contact/FaqItem";

export function FaqContact() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      pergunta: "Como funciona o processo de contratação dos serviços?",
      resposta:
        "Você preenche o formulário de contato ou envia uma mensagem pelo WhatsApp. Em até 24 horas úteis retornamos com uma análise inicial do projeto e, se necessário, marcamos uma reunião para alinhar requisitos, prazos e valores.",
    },
    {
      pergunta: "Quais tipos de projetos vocês desenvolvem?",
      resposta:
        "Desenvolvemos sistemas web completos, sites profissionais, e-commerces, landing pages, APIs e integrações personalizadas. Trabalhamos com tecnologias modernas como React, Next.js, Node, Nest.js e muito mais.",
    },
    {
      pergunta: "A Ar Studio cria sites personalizados ou usa templates?",
      resposta:
        "Criamos layouts totalmente personalizados, otimizados para velocidade, SEO e conversão. Também podemos trabalhar com templates caso o cliente deseje uma solução mais rápida ou econômica.",
    },
    {
      pergunta: "Quanto custa para desenvolver um site ou sistema?",
      resposta:
        "O valor depende do tipo de projeto, funcionalidades, integrações e prazo. Após entendermos sua necessidade, enviamos um orçamento detalhado. Não trabalhamos com valores fixos porque cada projeto é único.",
    },
    {
      pergunta: "Vocês oferecem manutenção após entregar o projeto?",
      resposta:
        "Sim! Oferecemos planos de manutenção, atualizações, otimização de performance e suporte contínuo. Também é possível contratar horas avulsas de manutenção conforme a necessidade.",
    },
    {
      pergunta: "Quanto tempo leva para um site ficar pronto?",
      resposta:
        "Depende do escopo. Landing pages podem ficar prontas entre 3 e 7 dias. Sites institucionais levam de 1 a 3 semanas. Sistemas mais complexos variam de 30 a 90 dias, dependendo das funcionalidades.",
    },
    {
      pergunta: "Vocês desenvolvem lojas virtuais completas?",
      resposta:
        "Sim! Criamos e-commerces usando Shopify ou WooCommerce, configuramos meios de pagamento, produtos, frete e toda a parte visual. Também podemos integrar APIs, ERPs e funcionalidades extras.",
    },
    {
      pergunta: "Vocês trabalham com integrações e APIs?",
      resposta:
        "Trabalhamos com desenvolvimento de APIs, microserviços e integrações com serviços externos, como sistemas de pagamento, CRMs, plataformas de automação e bancos de dados.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="dark:bg-dark-bg dark:text-dark-text -mt-20">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-dark-text mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-dark-text max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        {/* Lista de Perguntas */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              pergunta={faq.pergunta}
              resposta={faq.resposta}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* CTA no final */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-dark-text mb-4">
            Ainda tem dúvidas?
          </p>
          <a
            href="#contato"
            className="inline-block bg-blue-600 dark:bg-accent-cyan text-white px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl font-semibold"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </Section>
  );
}
