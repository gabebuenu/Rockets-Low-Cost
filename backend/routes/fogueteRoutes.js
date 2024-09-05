const express = require('express');
const { createFoguete, getFoguetes, updateFoguete, deleteFoguete } = require('../controllers/fogueteControllers');
const router = express.Router();

// Definir a rota para criar um foguete
router.post('/foguetes', createFoguete);  // Para o método POST

// Outras rotas de foguetes, se existirem
router.get('/foguetes', getFoguetes);
router.put('/foguetes/:id', updateFoguete);
router.delete('/foguetes/:id', deleteFoguete);

module.exports = router;
