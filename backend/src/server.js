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

// Nova rota para testar a conexão com o banco de dados
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    
    res.json({
      message: 'Conexão com o PostgreSQL foi um SUCESSO! ✅',
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Erro ao conectar no banco de dados:', error);
    res.status(500).json({
      message: 'FALHA ao conectar com o PostgreSQL! ❌',
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});