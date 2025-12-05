import { inserirLinkDocumento } from "./index.js";

const socket = io();
export { socket };

socket.emit("obterdocumentos" , (documentos) => {   
    documentos.forEach(documento => {
        inserirLinkDocumento(documento.nome);
    });
}   );