require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const fogueteRoutes = require('./routes/fogueteRoutes'); // Importe as rotas de foguetes
// ... outras rotas e configurações

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/usuarios', userRoutes);
app.use('/api', fogueteRoutes); // Aqui a rota será /api/foguetes
// ... outras rotas

// Conexão com MongoDB
const mongoUri = process.env.MONGO_URI;


mongoose.connect(mongoUri)
.then(() => {
  console.log('Conectado ao MongoDB');
  app.listen(process.env.PORT || 5000, () => {
    console.log('Servidor rodando na porta 5000');
  });
})
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));
