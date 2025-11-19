"use client";

import Link from "next/link";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { useState } from "react";

const services = [
  {
    id: "sites",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    title: "Sites Institucionais",
    description:
      "Presença digital profissional com design moderno, responsivo e otimizado para SEO.",
    features: ["Design Responsivo", "SEO Otimizado", "Performance"],
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "ecommerce",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "E-commerce",
    description:
      "Lojas virtuais completas e integradas com meios de pagamento, gestão de produtos e muito mais.",
    features: ["Pagamentos", "Gestão", "Integração"],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "sistemas",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Sistemas Web",
    description:
      "Sistemas customizados sob medida: dashboards, CRMs, ERPs e plataformas de gestão.",
    features: ["Dashboards", "Automação", "Escalável"],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: "apis",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "APIs e Integrações",
    description:
      "Conectamos seus sistemas e automatizamos processos através de APIs robustas.",
    features: ["REST APIs", "Webhooks", "Microserviços"],
    color: "from-purple-500 to-purple-600",
  },
];

export function ServicesPreview() {
  return (
    <Section className="bg-white dark:bg-dark-bg">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-primary-blue dark:text-accent-cyan rounded-full text-sm font-semibold mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark dark:text-white mb-4">
            Soluções completas para sua empresa
          </h2>
          <p className="text-xl text-neutral-medium dark:text-gray-300 max-w-2xl mx-auto">
            Do planejamento ao deploy, oferecemos tudo que você precisa para ter
            sucesso no digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="group relative bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-200 dark:border-dark-border hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-neutral-medium dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-neutral-dark dark:text-gray-200 text-sm rounded-full transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/servicos/#services`}
                  className="inline-flex items-center text-primary-blue dark:text-accent-cyan font-semibold group-hover:gap-2 transition-all"
                >
                  Saiba mais
                  <svg
                    className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/servicos"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-blue dark:bg-accent-cyan text-white text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            Ver Todos os Serviços
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
