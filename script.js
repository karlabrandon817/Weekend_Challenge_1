console.log('test script');

var employeeArray = [];

var newEmp = function (first, last, id, title, salary){
  var addEmpInfo = {
    first: first,
    last: last,
    id: id,
    title: title,
    salary: salary
  };
  employeeArray.push(addEmpInfo);
  console.log(employeeArray);
};

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
newEmp(firstName, lastName, empId, jobTitle, annualSalary);
};

function resetForm() {
document.getElementById("myForm").reset();
}
