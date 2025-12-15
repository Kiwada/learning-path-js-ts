# API Express & Mongo (Em Desenvolvimento)

> **Nota:** Este projeto documenta a jornada de construção de uma API, começando pelos fundamentos nativos do Node.js.

## 📋 Sobre o Projeto

Este repositório demonstra o entendimento prático do funcionamento de servidores web em **Node.js**. Ao invés de iniciar diretamente com frameworks, a implementação atual utiliza puramente o módulo nativo `http`. 

O objetivo desta abordagem é solidificar o conhecimento sobre ciclo de vida de requisições, headers, códigos HTTP e roteamento manual, provendo uma base sólida para a futura implementação com **Express.js** e **MongoDB**.

## 🚀 Funcionalidades Atuais

Nesta etapa inicial, a aplicação consiste em um servidor HTTP que:
- **Gerencia Rotas Manualmente:** Implementa um sistema de roteamento baseado em mapeamento de objetos para URLs (`/`, `/livros`, `/autores`).
- **Serve Conteúdo Estático:** Retorna respostas textuais com cabeçalhos apropriados (`Content-Type: text/plain`).
- **Executa sem Frameworks:** Demonstra capacidade de construir serviços backend com zero dependências de runtime (apenas Node.js padrão).

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES Modules)**: Utilização de sintaxe moderna do JS.
- **Node.js (Core Modules)**: Uso do módulo `http`.
- **Nodemon**: Ferramenta de desenvolvimento para hot-reloading.

## 🔜 Roadmap de Aprendizado

A evolução planejada para este projeto inclui:
- [ ] Migração de `http` nativo para **Express.js**.
- [ ] Conexão com banco de dados **MongoDB** (via Mongoose).
- [ ] Implementação de operações CRUD completas (Create, Read, Update, Delete).
- [ ] Estruturação em arquitetura MVC (Model-View-Controller).

## 📦 Como Rodar

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Execute o servidor em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```
3. O servidor estará rodando em `http://localhost:3000`.

---
*Desenvolvido como parte da trilha de especialização em Backend com Node.js.*