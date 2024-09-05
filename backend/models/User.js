// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  idade: { type: Number, required: true },
});

module.exports = mongoose.model('User', userSchema);
