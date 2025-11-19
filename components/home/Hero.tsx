"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../shared/Container";
import { Button } from "../shared/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-primary overflow-hidden">
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
        <div className="relative z-10 max-w-4xl py-20 md:py-18">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mt-12 mb-8 animate-fadeIn">
            <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">
              Seu hub de soluções tecnológicas
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn"
            style={{ animationDelay: "0.1s" }}
          >
            Transformamos{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent-cyan to-white bg-clip-text text-transparent">
                ideias
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-cyan/30 -z-10" />
            </span>{" "}
            em soluções digitais escaláveis
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl leading-relaxed animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            Desenvolvemos sites, sistemas web e APIs personalizados para
            pequenas e médias empresas que querem crescer no digital.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn">
            <Link
              href="/contato"
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              href="/servicos"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-dark transition-all duration-300"
            >
              Conhecer Serviços
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20 animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                100%
              </div>
              <div className="text-sm md:text-base text-blue-200">
                Projetos Entregues
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                Next.js
              </div>
              <div className="text-sm md:text-base text-blue-200">
                Stack Moderna
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                24/7
              </div>
              <div className="text-sm md:text-base text-blue-200">
                Suporte Técnico
              </div>
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
