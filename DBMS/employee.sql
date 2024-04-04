-- title : Employee Table
-- Author: Tamilarasan M
-- Created Date: 2-04-2024

CREATE DATABASE tamil;
USE tamil;
CREATE TABLE employee(
EMP_ID INT primary key,
EMP_NAME VARCHAR(20),
DEPARTMENT VARCHAR(20),
DATE_OF_BIRTH DATE,
DESIGNATION VARCHAR(15),
ADDRESS VARCHAR(35),
MOBILE_NO INT
);
DESCRIBE employee;
DROP TABLE employee;
ALTER TABLE employee ADD COLUMN EMAIL VARCHAR(20);
INSERT INTO employee VALUES(1, 'tamil', 'Software Engineer', '2002-08-23', 'MANAGER', 'mariyamman kovil street, villupuram', 987654321, 'tamil123@gmail.com');
INSERT INTO employee VALUES(2, 'afru', 'Tester', '2002-03-27', 'TEAM LEADER', 'KK road, villupuram', 987658751, 'afru123@gmail.com');
INSERT INTO employee VALUES(3, 'sugu', 'Software Engineer', '2002-11-14', 'MANAGER', 'murugan kovil street, villupuram', 987096321, 'sugu123@gmail.com');
INSERT INTO employee VALUES(4, 'KRISH', 'Software Engineer', '2002-11-07', 'MANAGER', 'murugan kovil street, koliyanur', 977090221, 'krish123@gmail.com');
SELECT * FROM employee;
UPDATE employee SET EMP_NAME="naresh" WHERE EMP_ID=3;
DELETE FROM employee WHERE EMP_ID=4;
TRUNCATE TABLE employee;