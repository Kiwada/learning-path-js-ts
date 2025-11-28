import { MongoClient } from "mongodb";

const client = new MongoClient(
    "mongodb+srv://kiwada:0987Milena@cluster-mongo-db.ocygoff.mongodb.net/?appName=Cluster-MONGO-DB"
);


let documentosCollection;

try {
    await client.connect();
    const db = client.db("cluster-mongo-db");
    documentosCollection = db.collection("documentos");
    
} catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
}

export {documentosCollection}
