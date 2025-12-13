# Nodejs Lib - Contador de Frequência de Palavras

Este projeto é uma ferramenta de linha de comando (CLI) desenvolvida em Node.js que lê arquivos de texto e analisa a frequência das palavras neles contidas.

## 📋 Funcionalidades do Projeto

- **Leitura de Arquivos**: Capaz de ler arquivos de texto do sistema de arquivos local.
- **Processamento de Texto**:
  - Divide o texto em parágrafos e palavras.
  - Limpa pontuções e caracteres especiais.
  - Ignora palavras pequenas (menos de 3 caracteres).
- **Contagem de Ocorrências**: Gera um relatório contabilizando quantas vezes cada palavra aparece no texto processado.

---

## 📚 Guia de Estudos: Gerenciamento de Pacotes com NPM

Este guia resume os conceitos fundamentais sobre o NPM e estrutura de projetos Node.js aplicados neste repositório.

### 1. O que é o NPM e como funciona um gerenciador de pacotes?

**NPM** (Node Package Manager) é o gerenciador de pacotes padrão para o ambiente de execução JavaScript Node.js.

- **Gerenciador de Pacotes**: É uma ferramenta que automatiza o processo de instalação, atualização, configuração e remoção de bibliotecas (pacotes) de software.
- **Repositório Online**: O NPM também se refere ao repositório online (registry) onde desenvolvedores publicam projetos de código aberto.
- **Funcionalidade**: Ele permite que você compartilhe e reutilize código, além de gerenciar facilmente as dependências do seu projeto, garantindo que todos os desenvolvedores (e o servidor de produção) utilizem as mesmas versões das bibliotecas.

### 2. Como criar a estrutura de um novo projeto Node.js (package.json)

Para iniciar um novo projeto Node.js e criar o "esqueleto" básico, utilizamos o comando `npm init`.

- **Comando Interativo**:
  ```bash
  npm init
  ```
  Isso inicia um assistente que faz perguntas sobre o projeto (nome, versão, descrição, ponto de entrada, etc.).

- **Modo Rápido (Padrão)**:
  ```bash
  npm init -y
  ```
  Cria o arquivo `package.json` imediatamente com as configurações padrão, sem fazer perguntas.

**O arquivo `package.json`**:
É o coração de qualquer aplicação Node.js. Ele armazena metadados do projeto e lista as dependências que o projeto precisa para funcionar.

### 3. Instalando e Utilizando Bibliotecas Externas

Para utilizar código escrito por terceiros (como a biblioteca `chalk` para colorir o terminal, por exemplo), usamos o comando `install`.

- **Instalação**:
  ```bash
  npm install nome-do-pacote
  # Exemplo:
  npm install chalk
  ```
  Isso baixa a biblioteca e a adiciona à lista de `dependencies` no seu `package.json`.

- **Importação e Uso**:
  No seu código JavaScript (ex: `index.js`), você importa a biblioteca para usá-la.
  
  *CommonJS (padrão antigo/atual do Node):*
  ```javascript
  const chalk = require('chalk');
  console.log(chalk.blue('Olá mundo!'));
  ```

  *ES Modules (padrão moderno, requer configuração "type": "module" no package.json):*
  ```javascript
  import chalk from 'chalk';
  console.log(chalk.blue('Olá mundo!'));
  ```

### 4. O que é a pasta `node_modules` e para que serve?

Quando você executa `npm install`, o NPM cria uma pasta chamada `node_modules` na raiz do seu projeto.

- **Armazenamento**: É onde o código real de todas as dependências (bibliotecas) que você instalou é salvo.
- **Árvore de Dependências**: Se você instala a biblioteca A, e a biblioteca A depende da biblioteca B, ambas estarão dentro de `node_modules`.
- **Não versionar**: **Nunca** envie a pasta `node_modules` para o GitHub (use um arquivo `.gitignore` para ignorá-la). Ela pode ser muito pesada e seus arquivos são recriáveis. Qualquer pessoa que baixar seu projeto pode rodar `npm install` para recriar essa pasta baseada no `package.json`.
