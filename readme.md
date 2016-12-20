Weekend Challenge 1
===================

Technologies Used
-----------------
* HTML
* CSS
* JavaScript/jQuery

Assignment Details
------------------
For my first weekend challenge, I created an application that records employee information along with each employee's salary. This application adds up the salaries to find out the monthly total.

First, the application has an input form that collects the following information:
  * Employee First Name
  * Employee Last Name
  * ID Number
  * Job Title
  * Annual Salary

A 'Submit' button clears out the inputs and logic stores the information. The employee information is then appended to the DOM so the user of the application can see the information entered.

Finally, logic calculates all of the employee salaries and reports back the monthly cost of salaries.

*** Hard Mode ***
-----------------
[x] Delete button removes employee from the DOM. Note that in hard mode, it need not remove that employee's salary from the reported total.

*** Pro Mode ***
-----------------
[x]Once the employee is deleted, also update the total spend on salaries to discount the removed employee's salary. This will require that the logic knows which element was removed. 
