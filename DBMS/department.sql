-- title : Department Table
-- Author: Tamilarasan M
-- Created Date: 2-04-2024

USE tamil;
CREATE TABLE department (
  DEPT_ID int,
  DEPT_NAME varchar(20),
  EMP_ID int,
  FOREIGN KEY (EMP_ID) REFERENCES employee(EMP_ID)
);
DROP TABLE department;
INSERT INTO department (DEPT_ID,DEPT_NAME,EMP_ID) VALUES
(1001, 'SL', 1),
(1002, 'DESIGN', 2),
(1003, 'TRAINING', 3);
TRUNCATE TABLE department;
SELECT * FROM department;
SELECT * FROM employee INNER JOIN department ON employee.EMP_ID = department.EMP_ID;
SELECT * FROM employee FULL JOIN department ON employee.EMP_ID = department.EMP_ID;
SELECT * FROM employee RIGHT JOIN department ON employee.EMP_ID = department.EMP_ID;
SELECT * FROM employee LEFT JOIN department ON employee.EMP_ID = department.EMP_ID;
