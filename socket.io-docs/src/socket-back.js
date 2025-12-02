import io from "./servidor.js";
import { encontrarDocumento } from "./documentosDB.js";
import { atualizarDocumento } from "./documentosDB.js"; 

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("selecionar_documento",async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);
    

    if (documento) {
      devolverTexto(documento.texto);
    }
  });

  socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizarDocumento(nomeDocumento, texto);

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
  });
});


