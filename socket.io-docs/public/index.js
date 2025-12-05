import { socket } from "./socket.front.index.js";



const listaDocumentos = document.getElementById("listaDocumentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("inputDocumento");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nomeDocumento = inputDocumento.value;
    socket.emit("adicionar_documento", nomeDocumento);
    inputDocumento.value = "";
});

function inserirLinkDocumento(nomeDocumento) {
    listaDocumentos.innerHTML += 
    `<a href="documento.html?nome=${nomeDocumento}"
    class="list-group-item list-group-item-action" >
    ${nomeDocumento}
    </a>
    `;
}  

export { inserirLinkDocumento };