"use client";

import React, { useState } from "react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { ProjectModal } from "./ProjectModal";

const projects = [
  {
    id: 1,
    name: "E-commerce Fashion Store",
    category: "E-commerce",
    shortDescription: "Loja virtual completa com integração de pagamentos",
    image: "/images/project-ecommerce-1.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    client: "Fashion Brand Co.",
    challenge:
      "Cliente precisava de uma plataforma robusta para vender moda online com gestão de estoque em tempo real e múltiplos meios de pagamento.",
    solution:
      "Desenvolvemos uma loja completa com painel administrativo, integração com Stripe e Mercado Pago, sistema de gestão de estoque automatizado e dashboard com analytics.",
    results: [
      "Aumento de 150% nas vendas online",
      "Redução de 40% no tempo de gestão de pedidos",
      "Taxa de conversão de 3.2%",
    ],
    link: "#",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "Landing Page SaaS",
    category: "Landing Pages",
    shortDescription: "Landing page de alta conversão para produto SaaS",
    image: "/images/project-landing-1.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    client: "TechStart Inc.",
    challenge:
      "Startup precisava de uma landing page otimizada para conversão de leads e integração com ferramentas de marketing.",
    solution:
      "Criamos uma landing page moderna com animações suaves, formulários otimizados, integração com email marketing e tracking de conversões.",
    results: [
      "Taxa de conversão de 12%",
      "Tempo de carregamento < 1s",
      "Score 98 no Lighthouse",
    ],
    link: "#",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: 3,
    name: "Dashboard Analytics",
    category: "Sistemas",
    shortDescription:
      "Painel de controle com visualização de dados em tempo real",
    image: "/images/project-dashboard-1.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
    client: "DataFlow Solutions",
    challenge:
      "Empresa precisava centralizar dados de múltiplas fontes em um dashboard intuitivo com relatórios customizáveis.",
    solution:
      "Desenvolvemos um sistema completo com visualização de dados em tempo real, relatórios personalizados, exportação em PDF/Excel e sistema de permissões por usuário.",
    results: [
      "Redução de 60% no tempo de análise",
      "15+ tipos de relatórios customizados",
      "Integração com 8 fontes de dados diferentes",
    ],
    link: "#",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: 4,
    name: "API e Integração Multi-Plataforma",
    category: "APIs",
    shortDescription: "API REST para sincronização de dados entre sistemas",
    image: "/images/project-api-1.png",
    technologies: ["Next.js API Routes", "TypeScript", "PostgreSQL", "Redis"],
    client: "MultiSync Solutions",
    challenge:
      "Empresa precisava conectar 5 sistemas diferentes (CRM, ERP, E-commerce, Estoque e Financeiro) e manter dados sincronizados em tempo real.",
    solution:
      "Desenvolvemos uma API REST centralizada com webhooks, filas de processamento, cache inteligente e documentação completa. Sistema processa sincronizações automáticas a cada 5 minutos com fallback manual.",
    results: [
      "99.9% de uptime",
      "Redução de 80% em erros de dados duplicados",
      "Sincronização de 10k+ registros/dia",
    ],
    link: "#",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 5,
    name: "CRM Customizado",
    category: "Sistemas",
    shortDescription: "Sistema de gestão de clientes sob medida",
    image: "/images/project-crm-1.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "tRPC"],
    client: "Sales Pro",
    challenge:
      "Equipe de vendas precisava de um CRM personalizado com automações específicas do processo comercial da empresa.",
    solution:
      "Desenvolvemos um CRM completo com pipeline visual, automação de follow-ups, integração com WhatsApp e email, e relatórios de performance.",
    results: [
      "Aumento de 35% na produtividade da equipe",
      "80% de redução em tarefas manuais",
      "ROI positivo em 3 meses",
    ],
    link: "#",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: 6,
    name: "Site Institucional Tech",
    category: "Institucional",
    shortDescription: "Website corporativo moderno e responsivo",
    image: "/images/project-site-1.png",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    client: "InnovaTech",
    challenge:
      "Empresa de tecnologia precisava reformular sua presença digital com um site moderno, rápido e fácil de atualizar.",
    solution:
      "Criamos um site institucional com CMS headless, blog integrado, formulários de contato e otimização completa para SEO.",
    results: [
      "300% mais visitantes orgânicos",
      "Score 95+ em todos os Core Web Vitals",
      "Redução de 70% no tempo de atualização de conteúdo",
    ],
    link: "#",
    color: "from-orange-500 to-orange-600",
  },
];

const categories = [
  "Todos",
  "E-commerce",
  "Landing Pages",
  "Sistemas",
  "APIs",
  "Institucional",
];

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Section className="bg-white dark:bg-dark-bg" id="projetos">
        <Container>
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-primary-blue dark:text-accent-cyan rounded-full text-sm font-semibold mb-4">
              Portfólio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark dark:text-white mb-4">
              Nossos Projetos
            </h2>
            <p className="text-xl text-neutral-medium dark:text-gray-400 max-w-2xl mx-auto">
              Selecionamos alguns dos nossos trabalhos mais relevantes
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer px-6 py-2.5 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary-blue text-white shadow-lg scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-neutral-dark dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-border hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Image */}
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-3 rounded-xl bg-white/50 dark:bg-white/10 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-gray-400"
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
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {project.name}
                      </p>
                    </div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-semibold">
                      Ver Detalhes →
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r ${project.color} text-white`}
                  >
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-dark dark:text-white mb-2 group-hover:text-primary-blue dark:group-hover:text-accent-cyan transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-medium dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-neutral-dark dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-neutral-dark dark:text-gray-300 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-neutral-medium dark:text-gray-400">
                Nenhum projeto encontrado nesta categoria
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </>
  );
}
