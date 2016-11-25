var employeeArray = [];

var userInput = function () {
var firstName = document.getElementById('firstName').value;
console.log("first name:", firstName);
var lastName = document.getElementById('lastName').value;
console.log("last name:", lastName);
var empId = document.getElementById('empId').value;
console.log("ID:", empId);
var jobTitle = document.getElementById('jobTitle').value;
console.log("job title:", jobTitle);
var annualSalary = document.getElementById('annualSalary').value;
console.log("salary:", annualSalary);
//add employee to array
newEmp=[firstName, lastName, empId, jobTitle, annualSalary];
console.log(newEmp);
employeeArray.push(newEmp)
document.getElementById("output").innerHTML=("Name: " + firstName + " " + lastName + " ID #: " + empId + "  Job Title: " + jobTitle + "  Salary: $" + annualSalary);
};

function resetForm() {
document.getElementById("empInfoForm").reset();
}

//function for monthly cost of salaries
var monthlySalaryTotal = function () {
  var salariesTotal = 0;
  for (var i = 0; i < employeeArray.length; i++){
  salariesTotal += Number(employeeArray[i][4]);
}
  return salariesTotal/12;
};
