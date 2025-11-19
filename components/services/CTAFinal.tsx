import React from "react";
import Link from "next/link";
import { Container } from "../shared/Container";

export function CTAFinal() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-primary text-center text-white overflow-hidden">
      {/* Efeitos visuais suaves */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-white rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Pronto para transformar{" "}
            <span className="bg-gradient-to-r from-accent-cyan to-white bg-clip-text text-transparent">
              sua ideia
            </span>{" "}
            em realidade?
          </h2>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Receba uma proposta personalizada — sem custo e sem compromisso.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Link
              href="/contato"
              className="px-6 py-3 text-lg font-semibold bg-white text-primary-dark rounded-lg hover:scale-105 transition-transform"
            >
              Solicitar Orçamento
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 text-lg font-semibold border border-white rounded-lg hover:bg-white hover:text-primary-dark transition-colors"
            >
              Ver Projetos
            </Link>
          </div>

          {/* Indicadores de confiança */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100 border-t border-white/20 pt-6">
            {["Resposta em 24h", "Orçamento grátis", "Sem compromisso"].map(
              (text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-accent-cyan"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {text}
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
