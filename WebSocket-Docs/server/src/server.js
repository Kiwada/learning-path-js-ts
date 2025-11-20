import express from 'express';
import url from 'url';
import path from 'path'; 

const app = express();
const porta = process.env.PORT || 3000; 
const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioAtual = path.dirname(caminhoAtual);

app.get('/', (req, res) => {
    res.send(`Servidor rodando! O diretório atual é: ${diretorioAtual}`);
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});