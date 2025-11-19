"use client";

import Link from "next/link";
import { Container } from "@/components/shared/Container";

export function ContactHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating circles */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent-cyan rounded-full blur-3xl opacity-20 animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary-blue rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <Container>
        <div className="relative z-10 max-w-4xl py-20 md:py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fadeIn">
            <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">
              Entre em contato
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn"
            style={{ animationDelay: "0.1s" }}
          >
            Construimos{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent-cyan to-white bg-clip-text text-transparent">
                sistemas web
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-cyan/30 -z-10" />
            </span>{" "}
            que impulsionam negócios
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl leading-relaxed animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            Transformamos ideias em aplicações robustas, escaláveis e modernas.
            Do MVP ao produto pronto para produção, com foco em experiência e
            resultados.
          </p>

          <div
            className="relative mb-10 text-white animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="rounded-2xl bg-white/8 backdrop-blur-md p-8 shadow-2xl border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/90">Próximo passo</p>
                  <h3 className="text-xl font-semibold">
                    Agende uma conversa conosco
                  </h3>
                </div>

                <div className="text-xs text-white/80">Gratuito</div>
              </div>

              <ul className="mt-6 space-y-3 text-white/90">
                <li className="flex items-center gap-3">
                  <span className="flex-none w-8 h-8 rounded-full bg-white/10 grid place-items-center">
                    1
                  </span>
                  <span>Compartilhe objetivos do seu projeto</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex-none w-8 h-8 rounded-full bg-white/10 grid place-items-center">
                    2
                  </span>
                  <span>Receba opções de escopo e estimativa</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex-none w-8 h-8 rounded-full bg-white/10 grid place-items-center">
                    3
                  </span>
                  <span>Plano personalizado e próximos passos</span>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-block rounded-2xl px-5 py-3 bg-white text-black font-semibold shadow hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  Agendar agora
                </a>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href="#projetos"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-primary-dark rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Solicitar Orçamento
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>

            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-dark transition-all duration-300"
            >
              Ver projetos
            </Link>
          </div>

          {/*aditional infos*/}
          <div
            className="flex items-center gap-6 pt-4 ml-0.5 text-sm text-white/90 animate-fadeIn"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7v10a2 2 0 0 0 2 2h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 7l-10 6L2 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>contato@suaempresa.com</span>
            </div>

            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92V21a1 1 0 0 1-1.1 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.1 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.9.36 1.76.7 2.58a1 1 0 0 1-.24 1.02L7.9 8.9a14.49 14.49 0 0 0 6 6l1.54-1.64a1 1 0 0 1 1.02-.24c.82.34 1.68.58 2.58.7a1 1 0 0 1 .75 1V21z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>+55 (11) 9xxxx-xxxx</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
