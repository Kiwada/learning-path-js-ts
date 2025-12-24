import "dotenv/config";
import app from "./src/app.js";
import db from "./src/config/dbConnect.js";

const PORT = process.env.PORT || 3000;

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
