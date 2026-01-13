import livrosRoutes from "./livroRoutes.js";

const routes = (app) => {
  app.get("/", (_req, res) => res.status(200).send("API com Express e MongoDB"));
  app.use(livrosRoutes);
};

export default routes;
