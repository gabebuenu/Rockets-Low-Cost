const express = require("express");
const { createCotacao } = require("../controllers/cotacaoController");
const router = express.Router();

router.post("/cotacoes", createCotacao);

module.exports = router;
