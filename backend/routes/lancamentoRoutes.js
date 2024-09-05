const express = require("express");
const { createLancamento } = require("../controllers/lancamentoController");
const router = express.Router();

router.post("/lancamentos", createLancamento);

module.exports = router;
