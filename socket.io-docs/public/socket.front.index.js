import { inserirLinkDocumento } from "./index.js";

const socket = io();
export { socket };

socket.emit("obterdocumentos" , (documentos) => {   
    documentos.forEach(documento => {
        inserirLinkDocumento(documento.nome);
    });
});

function emitirAdicionarDocumento(nome) {
    socket.emit("adicionar_documento", nome);
}

socket.on("adicionar_documentos_interface", (nome) => {
    inserirLinkDocumento(nome);
})


socket.on("documento_existente", (nome) => {
    alert(`documento ${nome} ja existe`);
})

socket.on("excluir_documento_sucesso", (nome) => {

    removerLinkDocumento(nome);
    
})
export { emitirAdicionarDocumento };