var employeeArray = [];

var userInput = function() {
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
    newEmp = [firstName, lastName, empId, jobTitle, annualSalary];
    console.log(newEmp);
    employeeArray.push(newEmp);

    //add new employee info to DOM
    document.getElementById("allEmployees").innerHTML += ("<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + empId + "</td><td>" + jobTitle + "</td><td>" +
        annualSalary + "</td></td>");

    linebreak = document.createElement("br");
    monthlySalary.appendChild(linebreak);
    document.getElementById("monthlySalary").innerHTML = ("Montly Salary Total: $" + Math.round(monthlySalaryTotal() * 100) / 100);
};


//reset form with 'submit' button click
function resetForm() {
    document.getElementById("empInfoForm").reset();
}

//function for monthly cost of salaries
var monthlySalaryTotal = function() {
    var salariesTotal = 0;
    for (var i = 0; i < employeeArray.length; i++) {
        salariesTotal += Number(employeeArray[i][4]);
    }
    return salariesTotal / 12;
};