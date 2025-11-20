# 🎬 Luz e Cena
Bem-vindo ao **Luz e Cena**! Este projeto é uma aplicação web moderna desenvolvida para consolidar conhecimentos avançados em **React**, **TypeScript** e **Design de Componentes**. O objetivo foi criar uma interface rica, modular e tipada, simulando um ambiente real de desenvolvimento com consumo de API e boas práticas de arquitetura.
---
## 🚀 Tecnologias e Ferramentas
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
---
## 📚 O Que Foi Desenvolvido
Este projeto serviu como um laboratório prático para implementar conceitos fundamentais e avançados do ecossistema React. Abaixo estão os principais pontos de aprendizado e implementação:
### 🏗️ Arquitetura e Configuração
- **Setup Moderno**: Configuração inicial robusta utilizando **Vite** para um ambiente de desenvolvimento ágil.
- **TypeScript no Core**: Transpilação eficiente com `tsconfig.web.json` e tipagem estrita para garantir segurança e escalabilidade.
- **Organização de Projeto**: Estrutura de pastas otimizada para manutenção, separando componentes, assets e serviços.
- **Assets e Fontes**: Gerenciamento profissional de recursos estáticos e tipografia.
### 🧩 Componentização e Design System
- **Componentes Reutilizáveis**: Criação de componentes modulares (Atomic Design) focados em reuso e flexibilidade.
- **Estilização Encapsulada**: Uso de **CSS Modules** para evitar conflitos de estilos e manter o código limpo.
- **Estilos Dinâmicos**: Implementação de classes condicionais com a biblioteca `classnames` para interfaces reativas.
- **Interatividade Visual**: Efeitos de hover, transições e uso de ícones com `react-icons` para enriquecer a UX.
### 🛡️ TypeScript Avançado
- **Tipagem de Props**: Definição clara de interfaces para props, incluindo propriedades opcionais e Union Types.
- **Melhoria da DX**: Uso do TypeScript para autocompletar e prevenir erros em tempo de desenvolvimento.
- **Refatoração de Tipos**: Centralização de tipos para evitar redundância e facilitar a manutenção do código.
- **Extensão de Atributos HTML**: Integração de interfaces nativas do React para componentes que repassam props (spread operator).
### 🌐 Integração com API e Gerenciamento de Estado
- **API Mock**: Simulação de um backend RESTful completo utilizando **json-server**.
- **Requisições HTTP**: Implementação do **Axios** para comunicação com a API, preferido pela simplicidade no tratamento de respostas.
- **Async/Await**: Fluxos assíncronos limpos e tratamento de erros robusto com `try/catch`.
- **Custom Hooks**: Encapsulamento de lógica de fetch e regras de negócio (como filtros) em hooks personalizados para manter os componentes visuais limpos.
### 📝 Formulários e Acessibilidade
- **Semântica HTML**: Construção de formulários acessíveis e estruturados corretamente.
- **Manipulação de Eventos**: Tipagem correta de eventos de formulário (`FormEvent`, `ChangeEvent`) no React.
- **Feedback ao Usuário**: Interfaces que respondem dinamicamente às ações do usuário.
---
## 🛠️ Como Executar o Projeto
Siga os passos abaixo para rodar o projeto localmente:
1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/luz-e-cena.git
   cd luz-e-cena
   ```
2. **Instale as dependências**
   ```bash
   npm install
   ```
3. **Inicie o Servidor Fake (API)**
   ```bash
   npm run server
   ```
   _O json-server rodará na porta 3001._
4. **Inicie a Aplicação (Frontend)**
   ```bash
   npm run dev
   ```
   _Acesse a aplicação em `http://localhost:5173`_
---
