import { inserirLinkDocumento } from "./socket.front.index.js";

const socket = io();

socket.emit("obterdocumentos" , (documentos) => {   
    documentos.forEach(documento => {
        inserirLinkDocumento(documento.nome);
    });
}   );