const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, 
  },
});

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Olá! O Backend do EcoColeta está funcionando! 🚀');
});


app.get('/api/materiais', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM materiais');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar materiais:', err.message);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});


app.get('/api/ecopontos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM ecopontos');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar ecopontos:', err.message);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});


module.exports = app;