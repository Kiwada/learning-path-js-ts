import { documentosCollection } from "./dbConnect.js";

function encontrarDocumento(nome) {
  const documento = documentosCollection.findOne({ nome 
    
  });

  return documento;
}

function atualizarDocumento(nome, texto) {
  const atualizacao = documentosCollection.updateOne({ nome }, { $set: { texto } });

  return atualizacao;
}

export {encontrarDocumento, atualizarDocumento};
