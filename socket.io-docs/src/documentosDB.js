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

function adicionarDocumento(nome) {
  const resultado = documentosCollection.insertOne({ 
    nome, 
    texto: "" });

  return resultado;
}

function atualizarDocumento(nome, texto) {
  const atualizacao = documentosCollection.updateOne({ nome }, { $set: { texto } });

  return atualizacao;
}

function excluirDocumento(nome) {
  const resultado = documentosCollection.deleteOne({ nome });

  return resultado;
}

export {obterDocumentos, encontrarDocumento, atualizarDocumento, adicionarDocumento, excluirDocumento};
