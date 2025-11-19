"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "../shared/Container";
import Image from "next/image";

export function HeroPortfolio() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-primary overflow-hidden">
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
        <div className="relative z-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="animate-fadeIn">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">
                  Portfólio
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn"
                style={{ animationDelay: "0.1s" }}
              >
                Projetos que transformam{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-accent-cyan to-white bg-clip-text text-transparent">
                    ideias
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent-cyan/30 -z-10" />
                </span>{" "}
                em resultados
              </h1>

              {/* Subtitle */}
              <p
                className="text-xl text-blue-100 mb-10 max-w-xl leading-relaxed animate-fadeIn"
                style={{ animationDelay: "0.2s" }}
              >
                Soluções web desenvolvidas com foco em conversão, performance e
                experiência do usuário. Veja os desafios e resultados
                alcançados.
              </p>

              {/* Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 mb-12 animate-fadeIn"
                style={{ animationDelay: "0.3s" }}
              >
                <Link
                  href="#projetos"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-primary-dark rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  Ver Projetos
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
                  Iniciar Projeto
                </Link>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-3 gap-6 animate-fadeIn"
                style={{ animationDelay: "0.4s" }}
              >
                <div>
                  <div className="text-3xl font-bold text-white mb-1">40+</div>
                  <div className="text-sm text-blue-200">Projetos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">95%</div>
                  <div className="text-sm text-blue-200">Satisfação</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-sm text-blue-200">Setores</div>
                </div>
              </div>
            </div>

            {/* Right: Carousel Gallery */}
            <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              <CarouselGallery />
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

// Carousel Gallery Component
function CarouselGallery() {
  const projectsByCategory = {
    "E-commerce": [
      {
        id: 1,
        name: "Loja Fashion",
        image: "/images/ecommerce-1.png",
        alt: "E-commerce de moda",
      },
      {
        id: 2,
        name: "Tech Store",
        image: "/images/ecommerce-2.png",
        alt: "Loja de eletrônicos",
      },
      {
        id: 3,
        name: "Food Delivery",
        image: "/images/ecommerce-3.png",
        alt: "App de delivery",
      },
    ],
    "Landing Pages": [
      {
        id: 4,
        name: "Campanha Marketing",
        image: "/images/landing-1.png",
        alt: "Landing page institucional",
      },
      {
        id: 5,
        name: "Produto SaaS",
        image: "/images/landing-2.png",
        alt: "Landing page de produto",
      },
    ],
    Sistemas: [
      {
        id: 6,
        name: "Dashboard Analytics",
        image: "/images/sistema-1.png",
        alt: "Painel de controle",
      },
      {
        id: 7,
        name: "CRM Custom",
        image: "/images/sistema-2.png",
        alt: "Sistema de gestão",
      },
    ],
    Apps: [
      {
        id: 8,
        name: "App Mobile",
        image: "/images/app-1.png",
        alt: "Aplicativo mobile",
      },
      {
        id: 9,
        name: "PWA",
        image: "/images/app-2.png",
        alt: "Progressive web app",
      },
    ],
  };

  const categories = Object.keys(projectsByCategory);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProjects =
    projectsByCategory[selectedCategory as keyof typeof projectsByCategory];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentProjects.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [currentProjects.length]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProject = currentProjects[currentIndex];

  return (
    <div className="relative">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm font-medium rounded-lg border border-white/20 transition-all ${
              selectedCategory === category
                ? "bg-white text-primary-dark"
                : "bg-white/5 text-white hover:bg-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Carousel Container */}
      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 overflow-hidden">
        {/* Image Display */}
        <div className="relative aspect-video bg-gradient-to-br from-white/5 to-white/10 rounded-xl overflow-hidden mb-6">
          {/* Placeholder or actual image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-white font-medium">{currentProject.name}</p>
              <p className="text-blue-200 text-sm mt-1">
                Adicione suas imagens aqui
              </p>
            </div>
          </div>

          {/* Uncomment when you have real images */}
          {/* <Image
            src={currentProject.image}
            alt={currentProject.alt}
            fill
            className="object-cover"
          /> */}
        </div>

        {/* Project Info */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {currentProject.name}
            </h3>
            <p className="text-sm text-blue-200">{selectedCategory}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) =>
                    (prev - 1 + currentProjects.length) % currentProjects.length
                )
              }
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % currentProjects.length)
              }
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2">
          {currentProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/30 w-1.5 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
