$(document).ready(function(){
  console.log('George the cat');

  var employeeArray = [];

  var userInput = function() {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var empId = $('#empId').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();
    //add employee to array
    newEmp = [firstName, lastName, empId, jobTitle, annualSalary];
    employeeArray.push(newEmp);
  };//end userInput function


  //add new employee info to DOM
  $('#submitButton').on('click', function(){
    userInput();
    $('#empInfoForm').find('input').val('');//clear form after submit
    var outputText = '';
    for(var i = 0; i < employeeArray.length; i++){
    outputText = ("<tr><td>" + employeeArray[i][0] + "</td><td>" + employeeArray[i][1] + "</td><td>" + employeeArray[i][2] + "</td><td>" + employeeArray[i][3] + "</td><td>" +
    employeeArray[i][4] + "</td><td>" + "<button class='deleteEmployeeButton'>Delete</button>" + "</td></tr>");


    monthlySalaryTotal();
  }//end for loop
    $('#allEmployees').append(outputText);
    $('#monthlySalary').html("Montly Salary Total: " + Math.round((monthlySalaryTotal() * 100) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
} );//end submitButton onClick function


//function for monthly cost of salaries
  var monthlySalaryTotal = function() {
    var salariesTotal = 0;
    for (var i = 0; i < employeeArray.length; i++) {
        salariesTotal += Number(employeeArray[i][4]);
    }
    return salariesTotal / 12;
  };//end monthlySalary

});//end doc ready
