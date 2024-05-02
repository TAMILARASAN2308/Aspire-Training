// title : Department Table
// Author: Tamilarasan M
// Created Date: 2-04-2024

public class Employee {
    int empId;
    String empName;
    String designation;
    String emailId;
    long phoneNo;
    String address;

    public Employee(int empId, String empName, String designation, String emailId, long phoneNo, String address) {
        this.empId = empId;
        this.empName = empName;
        this.designation = designation;
        this.emailId = emailId;
        this.phoneNo = phoneNo;
        this.address = address;
    }

    public void display() {
        System.out.println("Employee ID: " + empId);
        System.out.println("Employee Name: " + empName);
        System.out.println("Designation: " + designation);
        System.out.println("Email: " + emailId);
        System.out.println("Employee Phone Number: " + phoneNo);
        System.out.println("Address: " + address);
        System.out.println("");   
    }

    public static void main(String[] args) {
    
        Employee employee1 = new Employee(1, "afru", "Software Engineer", "afru123@example.com", 9876543210L, "KK road,villupuram");
        employee1.display();
        Employee employee2 = new Employee(2, "naresh", "SL", "naresh123@example.com", 9889643210L, "GK road,villupuram");
        employee2.display();
        Employee employee3 = new Employee(3, "sugu", "SL", "sugu123@example.com", 9889647810L, "RR road,villupuram");
        employee3.display();
        Employee employee4 = new Employee(4, "muthu", "team leader", "muthu123@example.com", 9762647810L, "murugan kovil street,villupuram");
        employee4.display();
    }
}
