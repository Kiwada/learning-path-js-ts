import express from 'express';
import mongoose from 'mongoose';
import LivroController from '../controllers/LivroController.js';

const routes = express.Router();

const validarObjectId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  return next();
};

routes
  .route('/livros')
  .get(LivroController.listarLivros)
  .post(LivroController.criarLivro);

routes
  .route('/livros/:id')
  .all(validarObjectId)
  .get(LivroController.obterLivroPorId)
  .put(LivroController.atualizarLivro)
  .delete(LivroController.deletarLivro);

export default routes;
