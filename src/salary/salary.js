// integration testing

function add(num1, num2) {
  return num1 + num2;
}

function composeSalary(salaryA, salaryB) {
  return add(salaryA, salaryB);
}

module.exports = composeSalary;
