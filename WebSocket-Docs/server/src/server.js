import express from 'express';
import url from 'url';
import path from 'path'; 
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const porta = process.env.PORT || 3000; 
const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");

app.use(express.static(diretorioPublico));

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173", 
        methods: ["GET", "POST"]
    }

});


let documentos = [
    { name: "JavaScript", content: "Texto sobre JS..." },
    { name: "Node", content: "Texto sobre Node..." },
    { name: "Socket.io", content: "Texto sobre Sockets..." }
];

io.on("connection", (socket) => {
    console.log("Um cliente se conectou ID:", socket.id);

    socket.emit("documentos_interface", documentos);

    socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {
        const documento = documentos.find((doc) => doc.name === nomeDocumento);
        if (documento) {
            socket.join(nomeDocumento);
            devolverTexto(documento.content);
        }
    });

    socket.on("texto_editor", (dados) => {
        console.log(dados);
        
        // Verifica se é o objeto esperado para atualização do documento
        if (typeof dados === 'object' && dados.nomeDocumento) {
            const { texto, nomeDocumento } = dados;
            const documento = documentos.find((doc) => doc.name === nomeDocumento);
            if (documento) {
                documento.content = texto;
            }
        }
    });

    socket.on("adicionar_documento", (nomeDocumento) => {
        const docExiste = documentos.find((doc) => doc.name === nomeDocumento);
        if (!docExiste) {
            documentos.push({ name: nomeDocumento, content: "" });
            io.emit("documentos_interface", documentos);
        }
    });

    socket.on("excluir_documento", (nomeDocumento) => {
        documentos = documentos.filter((doc) => doc.name !== nomeDocumento);
        io.emit("documentos_interface", documentos);
    });
});

httpServer.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}`);
});
