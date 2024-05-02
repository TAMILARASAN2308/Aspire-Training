# title : Employee Class
# Author: Tamilarasan M
# Created Date: 2-04-2024

class Employee:
    def __init__(self,emp_id,emp_name,age,department,salary):
        self.emp_id = emp_id
        self.emp_name = emp_name
        self.age = age
        self.department = department
        self.salary = salary
    def calculateSalary(self):
        print("EMP_ID:",self.emp_id,"EMP_NAME:",self.emp_name,"AGE:",self.age,"DEPARTMENT:", self.department,"SALARY:",self.salary)
Id=int(input("enter a employee id:"))
Name=input("enter a name:")
Age=int(input("enter a age:"))
Department=input("enter a department:")
Salary=int(input("enter a salary:"))
employee=Employee(Id,Name,Age,Department,Salary)
employee.calculateSalary()


