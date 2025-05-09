const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const empRouter = require('./Router/empRouter');
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }));
mongoose
  .connect('mongodb://127.0.0.1:27017/empsDb')
  .then(conn => console.log('Connected to MongoDB'));
app.use('/', empRouter);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening requests on port number ${PORT}`);
});
