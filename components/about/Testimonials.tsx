"use client";

import React, { useState, useEffect } from "react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";

const testimonials = [
  {
    name: "Maria Silva",
    role: "CEO",
    company: "Tech Solutions",
    text: "A A Group transformou completamente nossa presença digital. O site ficou moderno, rápido e exatamente como imaginávamos. A equipe é extremamente profissional e sempre disponível.",
    avatar: "MS",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Diretor de TI",
    company: "Inovare Digital",
    text: "Trabalhar com a A Group foi uma experiência incrível. Eles entenderam nossas necessidades e entregaram um sistema sob medida que otimizou todos os nossos processos internos.",
    avatar: "JS",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Fundadora",
    company: "StartHub",
    text: "Profissionalismo e qualidade técnica de ponta. O projeto foi entregue no prazo, com código limpo e bem documentado. Recomendo fortemente!",
    avatar: "AC",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    role: "Gerente de Projetos",
    company: "Conecta Business",
    text: "A comunicação durante todo o processo foi impecável. Sempre soubemos exatamente em que etapa estávamos e o resultado superou nossas expectativas.",
    avatar: "PO",
    rating: 5,
  },
  {
    name: "Carla Mendes",
    role: "Proprietária",
    company: "Boutique Online",
    text: "Meu e-commerce nunca funcionou tão bem! As vendas aumentaram significativamente após o lançamento. A A Group realmente entende de tecnologia e negócios.",
    avatar: "CM",
    rating: 5,
  },
  {
    name: "Ricardo Alves",
    role: "CTO",
    company: "DataFlow",
    text: "Stack moderna, código de qualidade e suporte excepcional. A A Group é o parceiro tecnológico que toda empresa precisa.",
    avatar: "RA",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentStart, setCurrentStart] = useState(0);
  const testimonialsPerPage = 3;

  // Avança 1 item a cada 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStart((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Calcula os 3 depoimentos visíveis (loopando o array)
  const visibleTestimonials = Array.from({ length: testimonialsPerPage }).map(
    (_, i) => testimonials[(currentStart + i) % testimonials.length]
  );

  return (
    <Section className="bg-white dark:bg-dark-bg overflow-hidden -mt-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-primary-blue dark:text-accent-cyan rounded-full text-sm font-semibold mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark dark:text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-neutral-medium dark:text-gray-400 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior indicador de
            sucesso
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div
            key={currentStart}
            className="gap-6 flex justify-between transition-transform duration-700 ease-in-out"
            style={{ transform: "translateX(0)" }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="min-w-[calc(33.333%-1rem)] bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-200 dark:border-dark-border hover:shadow-xl transition-all duration-300 animate-smooth-fade"
              >
                {/* Quote icon */}
                <svg
                  className="w-10 h-10 text-primary-blue/20 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-neutral-dark dark:text-gray-300 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-dark-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-accent-cyan flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-primary-dark dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-medium dark:text-gray-400">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(testimonials.length)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStart(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentStart
                  ? "bg-primary-blue w-8"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Ir para o depoimento ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-medium dark:text-gray-400">
            Quer ser nosso próximo case de sucesso?{" "}
            <a
              href="/contato"
              className="text-primary-blue dark:text-accent-cyan font-semibold hover:underline"
            >
              Entre em contato
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
