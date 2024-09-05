const mongoose = require("mongoose");

const fogueteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  missao: { type: String, required: true },
  ano: { type: String, required: true },
  imagem: { type: String, required: true },
  custo: { type: Number, required: true },
  ativo: { type: Boolean, required: true },
  tipo: { type: String, required: true },
  lancado: { type: Boolean, default: false },
  dataLancamento: { type: String, default: "" },
});

module.exports = mongoose.model("Foguete", fogueteSchema);
