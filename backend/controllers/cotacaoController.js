const Cotacao = require("../models/Cotacao");
const Foguete = require("../models/Foguete");

const createCotacao = async (req, res) => {
  const { fogueteId, custoPorLancamento, margemLucro } = req.body;

  try {
    const foguete = await Foguete.findById(fogueteId);

    if (!foguete || !foguete.ativo) {
      return res.status(400).json({ message: "Foguete inválido ou inativo" });
    }

    const valorTotal = custoPorLancamento + (custoPorLancamento * margemLucro / 100);

    const novaCotacao = new Cotacao({ 
      foguete: fogueteId, 
      custoPorLancamento, 
      margemLucro, 
      valorTotal 
    });

    await novaCotacao.save();
    res.status(201).json(novaCotacao);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar cotação" });
  }
};

// Outros métodos para ler, atualizar e deletar cotações

module.exports = { createCotacao };
