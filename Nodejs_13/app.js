const express = require('express');
const app = express();
const ejs = require('ejs');
const methodOverride = require('method-override');
const path = require('path');
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));
app.use(methodOverride('_method'));

// Schema

const fileSchema = new mongoose.Schema({
  url: {
    type: String,
  },
});

const File = mongoose.model('File', fileSchema);
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/upload', (req, res) => {
  res.render('upload');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Requestes are listening on port ${PORT}`);
});
