import express from "express";

const app = express();
app.use(express.json());

const livro = [
    {
        id: 1,
        nome: "Programador Prático",
    },
    {
        id: 2,
        nome: "Algoritmos e Estrutura de Dados"
    },

]

function buscaLivros(id) {
    return livro.findIndex((livro) => 
        {return livro.id === Number(id)});
}

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
    
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).json(livro[index]);
})
app.get("/livros", (req, res) => {
    res.status(200).json(livro);
});

app.post("/livros", (req, res) => {
    livro.push(req.body);
    res.status(201).send("Livro criado com sucesso!");
})
app.put("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livro[index].nome = req.body.nome;
    res.status(200).send("Livro atualizado com sucesso!");
    })

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livro.splice(index, 1);
    res.status(200).send("Livro deletado com sucesso!");
    })

export default app;
