<div align="center">

# 💡 Luz e Cena

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/css_modules-%23000000.svg?style=for-the-badge&logo=css-modules&logoColor=white)
![Axios](https://img.shields.io/badge/axios-%235A29E4.svg?style=for-the-badge&logo=axios&logoColor=white)

**Uma aplicação web moderna para gestão visual, modular e fortemente tipada.**

[Ver Demo] • [Reportar Bug] • [Solicitar Feature]

</div>

---

## 📋 Sobre o Projeto

O **Luz e Cena** foi desenvolvido com foco na criação de uma arquitetura escalável e componentizável. O objetivo principal foi aplicar conceitos avançados de **React com TypeScript**, utilizando **Atomic Design** para organização visual e **Custom Hooks** para encapsulamento de lógica.

A aplicação simula um cenário real, consumindo uma API (simulada via JSON Server) e gerenciando estados complexos de forma eficiente.

---

##  Funcionalidades e Conceitos Aplicados

Abaixo, uma síntese das técnicas de desenvolvimento utilizadas por **Kaio Fontenele** neste projeto:

### 1. Arquitetura e Configuração (Setup)
* **Ambiente Otimizado:** Configuração inicial com **Vite** para alta performance.
* **Build Moderno:** Transpilação configurada via `tsconfig.web.json` garantindo compatibilidade.
* **Organização:** Estrutura de pastas focada em manutenção e separação de responsabilidades.
* **Assets Management:** Uso otimizado de imagens na pasta `public` e fontes personalizadas.

### 2. UI e Componentização (Atomic Design)
* **Design Atômico:** Criação de componentes reutilizáveis, semânticos e acessíveis.
* **CSS Modules:** Estilização isolada para evitar conflitos de classes (Encapsulamento).
* **Estilos Dinâmicos:** Uso da biblioteca `classnames` para manipulação condicional.
* **Interatividade:** Efeitos de hover e integração visual com **React Icons**.
* **Modularidade:** Composição de componentes e uso avançado de `children`.

### 3. TypeScript e Segurança (Typing)
* **Tipagem Forte:** Interfaces e Types para Props, garantindo segurança no desenvolvimento.
* **Refatoração:** Centralização de tipos para evitar redundância (DRY).
* **Flexibilidade:** Uso de *Union Types*, *Optional Props* e extensão de atributos HTML.
* **Event Handling:** Tipagem correta de eventos de formulário.

### 4. Integração de API e Dados
* **API Mock:** Simulação de backend RESTful com **JSON Server**.
* **Axios:** Cliente HTTP configurado para tratamento de requisições e erros (`try/catch`).
* **Assincronismo:** Funções `async/await` para operações de API.
* **Custom Hooks:** Lógica de *fetch* e filtragem de dados isolada em hooks personalizados.

### 5. Formulários e Produtividade
* **Tags Semânticas:** Estruturação acessível de formulários.
* **Hooks de Estado:** Uso estratégico de `useState` e `useEffect`.
* **Spread Operator:** Repasse ágil de propriedades para componentes.

---

## 💻 Pré-requisitos

Antes de começar, verifique se você atende aos seguintes requisitos:
* **Node.js** (versão 18 ou superior)
* **npm** ou **yarn**

---

## 🔧 Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/kaiofontenele/luz-e-cena.git](https://github.com/kaiofontenele/luz-e-cena.git)

2.** Instale as dependências:

```bash
npm install
```
3. ** Inicie o JSON Server (API Fake) e o Frontend:

```bash

npm run dev

```



