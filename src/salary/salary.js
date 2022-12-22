// integration testing

function add(num1, num2) {
  return num1 + num2;
}

function composeSalary(salaryA, salaryB) {
  return add(salaryA, salaryB);
}

function displayTotalSalary(salaryA, salaryB) {
  let totalSalary = composeSalary(salaryA, salaryB);
  return `Total: ${totalSalary}`;
}

module.exports = displayTotalSalary;
