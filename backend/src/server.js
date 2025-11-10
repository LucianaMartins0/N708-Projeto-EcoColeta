const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { Pool } = require('pg');

const app = express();
const PORT = 3000;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Olá! O Backend do EcoColeta está funcionando! 🚀');
});


// ROTA [GET] /api/materiais
app.get('/api/materiais', async (req, res) => {
  try {

    const result = await pool.query('SELECT * FROM materiais');
    res.json(result.rows);
  } catch (err) {

    console.error('Erro ao buscar materiais:', err.message);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// ROTA [GET] /api/ecopontos abaixo:
app.get('/api/ecopontos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM ecopontos');
    res.json(result.rows);
  } catch (err) {

    console.error('Erro ao buscar ecopontos:', err.message);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});