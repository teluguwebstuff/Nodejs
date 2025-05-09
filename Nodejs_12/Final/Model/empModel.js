const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  salary: {
    type: Number,
  },
  desigination: {
    type: String,
  },
});

const Emp = mongoose.model('Emp', empSchema);

module.exports = Emp;
