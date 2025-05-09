const Emp = require('./../Model/empModel');
exports.getHome = async (req, res) => {
  const emps = await Emp.find();
  res.render('index', { emps });
};

exports.getNewEmp = (req, res) => {
  res.render('addEmp');
};

exports.getEditEmp = (req, res) => {
  res.render('EditEmp');
};

exports.postNewEmp = async (req, res) => {
  console.log(req.body);
  const { name, Salary, Designation } = req.body;
  const newEmp = await Emp.create({
    name,
    salary: Salary,
    desigination: Designation,
  });
  console.log(newEmp);
  res.status(201).redirect('/');
};
