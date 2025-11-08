const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Olá! O Backend do EcoColeta está funcionando! 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});