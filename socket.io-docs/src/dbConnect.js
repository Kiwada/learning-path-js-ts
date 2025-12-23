import "dotenv/config";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

if (!mongoUri) {
    throw new Error("Defina a variável de ambiente MONGODB_URI antes de iniciar o servidor.");
}

if (!dbName) {
    throw new Error("Defina a variável de ambiente MONGODB_DB_NAME antes de iniciar o servidor.");
}

const client = new MongoClient(mongoUri);


let documentosCollection;

try {
    await client.connect();
    const db = client.db(dbName);
    documentosCollection = db.collection("documentos");
    console.log("Conectado ao MongoDB");
} catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    throw error;
}

export {documentosCollection};
