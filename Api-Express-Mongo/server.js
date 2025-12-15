import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Curso de Express API");
});

app.get("/livros", (req, res) => {
    res.status(200).send("Entrei na rota livros");
});

app.get("/autores", (req, res) => {
    res.status(200).send("Entrei na rota autores");
});

app.listen(PORT, () => {
    console.log("servidor escutando!");
});
