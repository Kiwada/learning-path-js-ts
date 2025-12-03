import { documentosCollection } from "./dbConnect.js";

function obterDocumentos() {
  const documentos = documentosCollection.find().toArray();

  return documentos;
}

function encontrarDocumento(nome) {
  const documento = documentosCollection.findOne({ nome 
    
  });

  return documento;
}

function atualizarDocumento(nome, texto) {
  const atualizacao = documentosCollection.updateOne({ nome }, { $set: { texto } });

  return atualizacao;
}

export {obterDocumentos, encontrarDocumento, atualizarDocumento};
