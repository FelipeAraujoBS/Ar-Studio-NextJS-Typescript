"use client";

interface FAQItemProps {
  pergunta: string;
  resposta: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function FAQItem({
  pergunta,
  resposta,
  isOpen,
  onClick,
}: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg bg-white dark:bg-dark-card mb-4 overflow-hidden shadow-sm hover:shadow-md transition">
      {/* Pergunta - Clicável */}
      <button
        onClick={onClick}
        className="w-full cursor-pointer px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 hover:dark:bg-[#1e2a3d] transition"
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-text pr-4">
          {pergunta}
        </h3>
        <span
          className={`text-2xl text-blue-600 dark:text-accent-cyan transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          ▶
        </span>
      </button>

      {/* Resposta - Aparece/desaparece */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 text-gray-600 dark:text-dark-text leading-relaxed border-t border-gray-100">
          {resposta}
        </div>
      </div>
    </div>
  );
}
