const Foguete = require("../models/Foguete");

// Pegar todos os foguetes
const getFoguetes = async (req, res) => {
  try {
    const foguetes = await Foguete.find();
    res.json(foguetes);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar foguetes" });
  }
};

    const createFoguete = async (req, res) => {
    const { nome, missao, ano, imagem, custo, ativo, tipo } = req.body;
  
    // Verifique se todos os campos necessários estão presentes
    if (!nome || !missao || !ano || !imagem || !custo || ativo === undefined || !tipo) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }
  
    try {
      const novoFoguete = new Foguete({ nome, missao, ano, imagem, custo, ativo, tipo });
      await novoFoguete.save();
      res.status(201).json(novoFoguete);
    } catch (error) {
      console.error('Erro ao criar o foguete:', error.message, error.stack);
      res.status(500).json({ message: 'Erro ao criar foguete', erro: error.message });
    }
  };
  


// Atualizar foguete
const updateFoguete = async (req, res) => {
  const { id } = req.params;
  try {
    const fogueteAtualizado = await Foguete.findByIdAndUpdate(id, req.body, { new: true });
    res.json(fogueteAtualizado);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar foguete" });
  }
};

// Deletar foguete
const deleteFoguete = async (req, res) => {
  const { id } = req.params;
  try {
    await Foguete.findByIdAndDelete(id);
    res.json({ message: "Foguete deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar foguete" });
  }
};

module.exports = { getFoguetes, createFoguete, updateFoguete, deleteFoguete };
