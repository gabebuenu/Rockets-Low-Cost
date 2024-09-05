const mongoose = require("mongoose");

const lancamentoSchema = new mongoose.Schema({
  cotacao: { type: mongoose.Schema.Types.ObjectId, ref: 'Cotacao', required: true },
  dataLancamento: { type: Date, required: true },
  lancado: { type: Boolean, default: false }
});

module.exports = mongoose.model("Lancamento", lancamentoSchema);
