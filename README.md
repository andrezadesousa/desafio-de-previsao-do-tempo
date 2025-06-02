# 🌆 City Cards App

Uma aplicação estilizada em React que exibe cards interativos de cidades, com suporte a temas claro e escuro, e animações suaves usando styled-components.

![City Cards Demo](https://your-demo-link.com/demo.gif)

---

## ✨ Funcionalidades

- ✅ Exibição de cards com nome da cidade e nomes alternativos.
- ✅ Animações de entrada e flutuação nos cards.
- ✅ Suporte a temas: claro e escuro.
- ✅ Destaque visual para cidade selecionada.
- ✅ Acessibilidade: interação via teclado e mouse.
- ✅ Tipagem completa com TypeScript.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Sistema de tema customizado (claro e escuro)

---


## 📁 Estrutura do Projeto

```bash
├── components/
│   ├── CityCard.tsx      # Componente de Card de Cidade
│   └── ThemeProvider.tsx # Provedor de tema e contexto
├── context/
│   └── ThemeContext.tsx  # Hook de tema (claro/escuro)
├── styles/
│   ├── theme.ts          # Configuração de temas
│   └── global.ts         # Estilos globais
├── utils/
│   └── cities.ts         # Lista e tipos de cidades
├── App.tsx
└── index.tsx


--

