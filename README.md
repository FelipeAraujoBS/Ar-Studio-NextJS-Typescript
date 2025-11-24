# 🎨 Ar Studio - Website Institucional

Site institucional e portfólio da **Ar Studio**, empresa especializada em desenvolvimento de sistemas web modernos. Construído com Next.js 14, TypeScript e focado em performance e experiência do usuário.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)

## 📋 Sobre o Projeto

Este é o site oficial da Ar Studio, desenvolvido para apresentar os serviços da empresa, mostrar o portfólio de projetos e facilitar o contato com potenciais clientes. O projeto demonstra habilidades full-stack modernas com Next.js, incluindo server-side rendering, API routes e integração com serviços externos.

### ✨ Funcionalidades

- **🏢 Página Institucional**: História, missão e visão da Ar Studio
- **💼 Portfólio Interativo**: Showcase de projetos realizados com detalhes técnicos
- **⭐ Depoimentos**: Avaliações e feedbacks de clientes anteriores
- **📧 Formulário de Contato**: Integração com Resend para envio automático de emails
- **📱 Design Responsivo**: Otimizado para desktop, tablet e mobile
- **⚡ Performance**: SSR e otimizações do Next.js para carregamento rápido

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **React 18**
- **Tailwind CSS** *(ou sua biblioteca de estilo)*
- Animações e transições suaves

### Backend/API
- **Next.js API Routes**
- **Resend** - Serviço de envio de emails
- Validação de formulários server-side

### Ferramentas de Desenvolvimento
- ESLint
- Prettier
- Git & GitHub

## 📁 Estrutura do Projeto

```
/app
  ├── api/          # API routes (envio de email)
  ├── (pages)/      # Páginas da aplicação
  └── layout.tsx    # Layout principal
/components         # Componentes React reutilizáveis
/lib               # Utilitários e configurações
/public            # Assets estáticos (imagens, ícones)
/types             # Definições TypeScript
```

## 💻 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/FelipeAraujoBS/Ar-Studio-NextJS-Typescript.git
cd Ar-Studio-NextJS-Typescript
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env.local na raiz do projeto
RESEND_API_KEY=sua_chave_aqui
CONTACT_EMAIL=seu_email@exemplo.com
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 🌐 Deploy

O projeto está configurado para deploy na **Vercel** com CI/CD automático.

**Status**: 🚧 Em breve no ar

> Deploy planejado para os próximos dias após ajustes finais

## 🎯 Destaques Técnicos

- ✅ **Server-Side Rendering (SSR)** para melhor SEO
- ✅ **API Routes** do Next.js para backend serverless
- ✅ **TypeScript** para type safety e melhor DX
- ✅ **Componentes modulares** e reutilizáveis
- ✅ **Validação robusta** de formulários
- ✅ **Responsividade** em todos os dispositivos
- ✅ **Performance otimizada** com lazy loading e code splitting

## 📧 Funcionalidade de Email

O formulário de contato utiliza:
- **Resend API** para envio confiável de emails
- Validação server-side dos dados
- Feedback visual para o usuário
- Rate limiting para prevenir spam

## 👤 Autor

**Felipe de Araújo**  
Desenvolvedor Full-Stack | Fundador da Ar Studio

- LinkedIn: [felipe-de-araujo-b87386231](https://www.linkedin.com/in/felipe-de-araujo-b87386231/)
- GitHub: [@FelipeAraujoBS](https://github.com/FelipeAraujoBS)

## 📝 Licença

Este projeto está sob a licença MIT.

---

⭐ Se você gostou deste projeto, considere dar uma estrela no repositório!
