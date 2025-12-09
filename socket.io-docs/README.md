# Socket.IO Docs

**Projeto de Editor de Documentos em Tempo Real**

Este projeto é uma aplicação web de editor de textos colaborativo em tempo real, desenvolvida como parte de um caminho de aprendizado em JavaScript e Node.js. A aplicação permite que múltiplos usuários criem, editem e excluam documentos simultaneamente, com as alterações sendo refletidas instantaneamente para todos os clientes conectados.

## 🚀 Funcionalidades

-   **Edição em Tempo Real**: Vários usuários podem editar o mesmo documento ao mesmo tempo, vendo as alterações uns dos outros instantaneamente.
-   **Criação de Documentos**: Interface para criar novos documentos que são persistidos no banco de dados.
-   **Listagem Automática**: A lista de documentos disponíveis é atualizada em tempo real para todos os clientes quando um novo documento é adicionado ou removido.
-   **Exclusão de Documentos**: Funcionalidade para excluir documentos, com remoção imediata da interface de todos os usuários e redirecionamento de quem estava editando o documento excluído.
-   **Persistência de Dados**: Integração com MongoDB para salvar o conteúdo dos documentos.

## 🛠️ Tecnologias Utilizadas

-   **Frontend**: HTML5, CSS3, JavaScript (Vanilla ES6+).
-   **Backend**: Node.js com Express.
-   **Comunicação Real-Time**: Socket.IO.
-   **Banco de Dados**: MongoDB (driver nativo).
-   **Ferramentas de Desenvolvimento**: Nodemon.

## 📦 Como Instalar e Rodar

1.  **Clone o repositório**:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  **Acesse a pasta do projeto**:
    ```bash
    cd learning-path-js-ts/socket.io-docs
    ```

3.  **Instale as dependências**:
    ```bash
    npm install
    ```
    *Certifique-se de ter o Node.js instalado.*

4.  **Configure o Banco de Dados**:
    *   Certifique-se de que você tem uma instância do MongoDB rodando (localmente ou Atlas).
    *   Verifique e configure a string de conexão no arquivo `src/dbConnect.js`.

5.  **Inicie o Servidor**:
    ```bash
    npm run dev
    ```

6.  **Acesse a Aplicação**:
    *   Abra o navegador em `http://localhost:3000` (ou a porta configurada).

## 📂 Estrutura do Projeto

-   `public/`: Arquivos estáticos do frontend (HTML, CSS, JS do cliente).
-   `src/`: Código fonte do backend.
    -   `socket-back.js`: Lógica principal do servidor e eventos do Socket.IO.
    -   `documentosDB.js`: Camada de acesso ao banco de dados (CRUD).
    -   `dbConnect.js`: Configuração da conexão com o MongoDB.
    -   `servidor.js`: Configuração do servidor Express e HTTP.

## 🤝 Contribuição

Sinta-se à vontade para fazer um fork do projeto, abrir issues e enviar pull requests.

## 📝 Licença

Este projeto está sob a licença ISC.
