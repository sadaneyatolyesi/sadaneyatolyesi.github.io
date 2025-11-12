const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS: GitHub Pages'ten gelen isteklere izin ver
app.use(cors());

// Yüklenen dosyaları statik olarak sunmak için
app.use(express.static('uploads'));

// Multer ayarları: dosyaları uploads klasörüne kaydet
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

// Yükleme endpoint'i
app.post('/upload', upload.single('notaDosyasi'), (req, res) => {
  const file = req.file;
  const aciklama = req.body.aciklama;

  if (!file) {
    return res.status(400).send('Dosya yüklenemedi.');
  }

  res.send(`
    <h2>Dosya başarıyla yüklendi!</h2>
    <p><strong>Dosya adı:</strong> ${file.filename}</p>
    <p><strong>Açıklama:</strong> ${aciklama}</p>
    <p><a href="/${file.filename}" target="_blank">Dosyayı görüntüle</a></p>
  `);
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});