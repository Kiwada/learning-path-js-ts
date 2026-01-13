import Livros from "../src/models/Livros.js";

class LivrosController {
  static async listarLivros(_req, res) {
    try {
      const listaLivros = await Livros.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar livros", error: error.message });
    }
  }

  static async obterLivroPorId(req, res) {
    try {
      const livro = await Livros.findById(req.params.id);

      if (!livro) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }

      res.status(200).json(livro);
    } catch (error) {
      res.status(400).json({ message: "ID inválido", error: error.message });
    }
  }

  static async criarLivro(req, res) {
    try {
      const novoLivro = await Livros.create(req.body);
      res.status(201).json(novoLivro);
    } catch (error) {
      res.status(400).json({ message: "Erro ao criar livro", error: error.message });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const livroAtualizado = await Livros.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true, runValidators: true },
      );

      if (!livroAtualizado) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }

      res.status(200).json(livroAtualizado);
    } catch (error) {
      res.status(400).json({ message: "Erro ao atualizar livro", error: error.message });
    }
  }

  static async deletarLivro(req, res) {
    try {
      const livroRemovido = await Livros.findByIdAndDelete(req.params.id);

      if (!livroRemovido) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }

      res.status(200).json({ message: "Livro deletado com sucesso!" });
    } catch (error) {
      res.status(400).json({ message: "Erro ao deletar livro", error: error.message });
    }
  }
}

export default LivrosController;
