"use client";

import React, { useEffect } from "react";
import Link from "next/link";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    name: string;
    category: string;
    client: string;
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
    link: string;
    color: string;
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-card rounded-2xl shadow-2xl animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-neutral-dark dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${project.color} text-white`}
            >
              {project.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark dark:text-white mb-2">
              {project.name}
            </h2>
            <p className="text-lg text-neutral-medium dark:text-gray-400">
              Cliente: <span className="font-semibold">{project.client}</span>
            </p>
          </div>

          {/* Challenge */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-3 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-primary-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              O Desafio
            </h3>
            <p className="text-neutral-dark dark:text-gray-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-3 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-accent-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              A Solução
            </h3>
            <p className="text-neutral-dark dark:text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Resultados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-sm text-green-900 dark:text-green-100 font-medium">
                      {result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-4">
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary-blue/10 dark:bg-primary-blue/20 text-primary-blue dark:text-accent-cyan rounded-lg text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 border-t border-gray-200 dark:border-dark-border">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-blue text-white text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Criar Projeto Similar
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
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-neutral-dark dark:text-white text-lg font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
