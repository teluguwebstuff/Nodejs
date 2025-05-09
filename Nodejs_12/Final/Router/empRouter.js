const express = require('express');
const empRouter = express.Router();
const {
  getEditEmp,
  getHome,
  getNewEmp,
  postNewEmp,
} = require('./../Controllers/empController');

empRouter.get('/', getHome);
empRouter.route('/new').get(getNewEmp).post(postNewEmp);
empRouter.get('/edit', getEditEmp);
module.exports = empRouter;
