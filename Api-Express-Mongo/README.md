# API Express & Mongo

API REST simples para cadastro de livros, construída com **Express** e **MongoDB** (via Mongoose). O objetivo é praticar CRUD, validação e estruturação básica de um backend em Node.js.

## 📚 O que esta API faz

- CRUD completo de livros em `/livros`
- Conexão com MongoDB usando `MONGODB_URI`
- Respostas JSON padronizadas para sucesso e erro

## ✅ Requisitos

- Node.js 18+
- MongoDB (local ou Atlas)
- Variáveis de ambiente configuradas

## 🔧 Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Crie um arquivo `.env` na raiz com:
   ```bash
   MONGODB_URI="mongodb+srv://<user>:<password>@<cluster>/<database>"
   PORT=3000
   ```
3. Rode em modo desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse em `http://localhost:3000`.

## 📌 Endpoints

### Livros

- `GET /livros` — lista todos os livros
- `GET /livros/:id` — busca livro por ID
- `POST /livros` — cria um livro
- `PUT /livros/:id` — atualiza um livro
- `DELETE /livros/:id` — remove um livro

### Exemplo de payload

```json
{
  "titulo": "Clean Code",
  "editora": "Prentice Hall",
  "preco": 99.9,
  "paginas": 464
}
```

## 🗂️ Estrutura

- `server.js` — entrypoint do servidor
- `src/app.js` — configuração do Express e rotas
- `src/models/Livros.js` — schema do Mongoose
- `src/config/dbConnect.js` — conexão com MongoDB

## 🚀 Próximos passos sugeridos

- Middleware centralizado de erros
- Validação de entrada (Joi/Zod)
- Paginação e filtros em `/livros`
- Testes com Jest + Supertest
