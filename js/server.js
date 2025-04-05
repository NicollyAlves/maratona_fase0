const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static('public'));

// Rota para "/fasezero" -> mostra "fasezero.html"
app.get('/fasezero', (req, res) => {
    res.sendFile(path.join(__dirname, 'fasezero.html'));
});

// Rota para "/fasezero" -> mostra "fasezero.html"
app.get('/maratona', (req, res) => {
    res.sendFile(path.join(__dirname, 'maratona.html'));
});

// Rota padrão para a página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5500, () => {
    console.log('Servidor rodando em http://localhost:5500');
});