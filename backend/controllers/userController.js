// controllers/userController.js
const User = require('../models/User');

// Registro de usuário
exports.registerUser = async (req, res) => {
  const { nome, idade } = req.body;

  if (!nome || !idade) {
    return res.status(400).json({ error: 'Nome e idade são obrigatórios.' });
  }

  try {
    const existingUser = await User.findOne({ nome });
    if (existingUser) {
      return res.status(400).json({ error: 'Usuário já cadastrado.' });
    }

    const newUser = new User({ nome, idade });
    await newUser.save();

    res.status(201).json({ message: 'Usuário registrado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar usuário.' });
  }
};

// Login de usuário
exports.loginUser = async (req, res) => {
    const { nome } = req.body;
  
    if (!nome) {
      return res.status(400).json({ error: 'Nome é obrigatório.' });
    }
  
    try {
      const user = await User.findOne({ nome: new RegExp(`^${nome}$`, 'i') });
      console.log("Usuário encontrado:", user); // Adicione um log
      if (!user) {
        return res.status(400).json({ error: 'Usuário não encontrado.' });
      }
  
      res.status(200).json({ idade: user.idade });
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error); // Adicione um log
      res.status(500).json({ error: 'Erro ao autenticar usuário.' });
    }
  };
  