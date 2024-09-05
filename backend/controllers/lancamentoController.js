const Lancamento = require("../models/Lancamento");
const Cotacao = require("../models/Cotacao");

const createLancamento = async (req, res) => {
  const { cotacaoId, dataLancamento } = req.body;

  try {
    const cotacao = await Cotacao.findById(cotacaoId);
    if (!cotacao || !cotacao.concluida) {
      return res.status(400).json({ message: "Cotação inválida ou não concluída" });
    }

    const novoLancamento = new Lancamento({ cotacao: cotacaoId, dataLancamento, lancado: true });
    await novoLancamento.save();
    
    res.status(201).json(novoLancamento);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar lançamento" });
  }
};

// Outros métodos para ler lançamentos

module.exports = { createLancamento };
