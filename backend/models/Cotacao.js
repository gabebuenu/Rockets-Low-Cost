const mongoose = require("mongoose");

const cotacaoSchema = new mongoose.Schema({
  foguete: { type: mongoose.Schema.Types.ObjectId, ref: 'Foguete', required: true },
  custoPorLancamento: { type: Number, required: true },
  margemLucro: { type: Number, required: true },
  valorTotal: { type: Number, required: true },
  concluida: { type: Boolean, default: false }
});

module.exports = mongoose.model("Cotacao", cotacaoSchema);
