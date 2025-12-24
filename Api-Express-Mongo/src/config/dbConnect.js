import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error("Define the MONGODB_URI environment variable before starting the server.");
}

mongoose.set("strictQuery", true);
mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("Connected to MongoDB.");
});

export default db;
