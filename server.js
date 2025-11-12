// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const upload = multer({ dest: 'uploads/' });

app.use(express.static('resimler'));

app.post('/upload', upload.single('nota'), (req, res) => {
  res.send('Nota başarıyla yüklendi!');
});

app.get('/', (req, res) => {
  res.send('Ney Atölyesi Backend çalışıyor!');
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});