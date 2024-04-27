/*
 * Title : DBMS SQL Assignment
 * Author : TAMILARASAN M
 * Created At : 06-04-2024
 * Last Modified Date : 08-04-2024
 * Reviewed By :
 * Review Date :
 */
-- programmer table
CREATE DATABASE AspireSystems;
USE AspireSystems;
CREATE TABLE programmer(
name VARCHAR(20),
dob DATE,
doj DATE,
sex VARCHAR(10),
prof1 VARCHAR(15),
prof2 VARCHAR(15),
salary INT
);
DESCRIBE programmer;
INSERT INTO Programmer (name,dob,doj,sex,prof1,prof2,salary)
VALUES
('yazh','1993-01-15','2015-05-20','F',"pascal","c",5000),
('afru','1995-04-03', '2016-08-10','M',"COBOL","basic",4000),
('sugu','1989-12-10', '2010-02-28','M',"c","pascal",3500),
('muthu','1999-08-20', '2020-03-15','M',"COBOL","clipper",4500),
('lavanya','1992-03-25', '2014-09-05','F',"clipper","basic",3000);
SELECT * FROM programmer;
DROP TABLE programmer;
TRUNCATE TABLE programmer;

-- software table
USE aspiresystems;
CREATE TABLE software(
name VARCHAR(20) PRIMARY KEY,
title VARCHAR(30),
dev_in VARCHAR(10),
scost INT,
dcost INT,
sold  INT
);
DESCRIBE software;
INSERT INTO software (name, title, dev_in, scost, dcost, sold)
VALUES
('yazh', 'parachutes', 'pascal', 399.95, 6000, 43),
('afru', 'accounting software', 'basic', 799.75, 4500, 35),
('sugu', 'document management', 'pascal', 399.95, 6000, 43),
('muthu', 'inventory management', 'clipper', 500.50, 3000, 30),
('lavanya', 'web development', 'COBOL',600.25, 4000, 40);
SELECT * FROM software;
DROP TABLE software;

-- studies table
USE aspiresystems;
CREATE TABLE studies(
name VARCHAR(20),
splace VARCHAR(10),
course VARCHAR(10),
ccost VARCHAR(10)
);
DESCRIBE studies;
INSERT INTO studies (name,splace,course,ccost)
VALUES
('yazh','sabhari','PGDCA',1000),
('afru','bdps','DCS',1500),
('sugu','sabhari','PGDCA',1000),
('muthu','bdps','DCS',1500),
('lavanya','sabhari','PGDCA',1000);
SELECT * FROM studies;
DROP TABLE studies;



-- ASSIGNMENT 1
USE aspiresystems;
SELECT AVG(scost) FROM software WHERE dev_in='pascal';
SELECT name,TIMESTAMPDIFF(year,dob,CURDATE()) AS age FROM programmer;
SELECT programmer.name,TIMESTAMPDIFF(year,dob,CURDATE()) AS age FROM programmer JOIN studies ON programmer.name=studies.name WHERE course='DCS';
SELECT MAX(sold) FROM software;
SELECT name,dob FROM programmer WHERE month(dob)=1;
SELECT MIN(ccost) FROM studies;
SELECT programmer.name FROM programmer JOIN studies on programmer.name = studies.name WHERE course='PGDCA';
SELECT SUM(salary) FROM programmer WHERE prof1='c' OR prof2='c';
UPDATE programmer SET name='ramesh' WHERE name='sugu';
UPDATE software SET name='ramesh' WHERE name='sugu';
UPDATE studies SET name='ramesh' WHERE name='sugu';
SELECT * FROM software WHERE name='ramesh';
SELECT programmer.name FROM programmer JOIN studies ON programmer.name=studies.name WHERE splace='sabhari';
SELECT * FROM software WHERE sold>20000;
SELECT CEIL(dcost/scost) AS no_copies FROM software;
SELECT MAX(dcost) FROM software WHERE dev_in='basic';
SELECT * FROM software WHERE sold>=CEIL(scost/dcost);
SELECT title FROM software WHERE dev_in='dbase';
SELECT programmer.name FROM programmer JOIN studies on programmer.name=studies.name WHERE splace='paragathi';
SELECT programmer.name FROM programmer JOIN studies ON programmer.name=studies.name WHERE ccost BETWEEN 5000 AND 10000;
SELECT AVG(ccost) FROM studies;
SELECT name FROM programmer WHERE prof1='c' or prof2='c'; 
SELECT name FROM programmer WHERE prof1 IN ('COBOL','pascal') or prof2 IN ('COBOL','pascal');
SELECT name FROM programmer WHERE prof1 NOT IN ('COBOL','pascal') or prof2 NOT IN ('COBOL','pascal');
SELECT MAX(TIMESTAMPDIFF(year,dob,CURDATE())) AS age FROM programmer WHERE sex='M';
SELECT AVG(TIMESTAMPDIFF(year,dob,CURDATE())) AS age FROM programmer WHERE sex='F';
SELECT name,TIMESTAMPDIFF(year,doj,CURDATE())AS experience FROM programmer order by experience desc;
SELECT name FROM programmer WHERE month(dob)=month(curdate());
SELECT name  FROM programmer WHERE sex='f';
SELECT prof1,prof2 FROM programmer WHERE sex='m';
SELECT AVG(salary) FROM programmer;
SELECT name FROM programmer WHERE salary BETWEEN 2000 AND 4000;
SELECT * FROM programmer WHERE prof1 NOT IN ('pascal','clipper','COBOL') and prof2 NOT IN ('pascal','clipper','COBOL');
SELECT name FROM programmer WHERE sex='f' AND prof1='c' or prof2 ='c' AND TIMESTAMPDIFF(year,dob,CURDATE())>24;
SELECT name FROM programmer WHERE WEEK(dob)=WEEK(curdate());
SELECT name FROM programmer WHERE TIMESTAMPDIFF(year,doj,CURDATE())> 1;
SELECT name FROM programmer WHERE TIMESTAMPDIFF(year,doj,CURDATE())=2;
SELECT dcost-(sold*scost) FROM software WHERE dcost>(sold*scost);
SELECT title FROM software WHERE sold=0;
SELECT dcost FROM software WHERE name='yazh';
SELECT distinct splace FROM studies;
SELECT distinct course FROM studies;
SELECT name FROM programmer WHERE name like'%a%a%';
SELECT name FROM programmer WHERE LENGTH(name)= 5;
SELECT name FROM programmer WHERE (prof1='COBOL' or prof2='COBOL')AND TIMESTAMPDIFF(year,doj,CURDATE())>2;
SELECT MIN(LENGTH(name)) FROM programmer;
SELECT AVG(dcost) FROM software WHERE dev_in='COBOL';
-- SELECT name,sex,dob,doj FROM programmer;
SELECT name FROM programmer WHERE DAY(dob)=31;
SELECT name,salary FROM programmer WHERE sex='m' AND (prof1 !='COBOL' AND prof2 !='COBOL');
SELECT title,scost,dcost,(scost-dcost) AS diff_scost_dcost FROM software ORDER BY diff_scost_dcost DESC;
SELECT name,dob,doj FROM programmer WHERE month(dob)=month(doj);
SELECT name FROM programmer WHERE name like '% %';

-- ASSIGNMENT 2
SELECT dev_in,count(title) FROM software GROUP BY dev_in;
SELECT name,count(dev_in) FROM software GROUP BY name;
SELECT sex,count(name) FROM programmer GROUP BY sex;
SELECT dev_in,MAX(scost),MAX(sold) FROM software GROUP BY dev_in;
SELECT YEAR(dob),count(*) as num from programmer GROUP BY dob;
SELECT YEAR(doj),count(*) as num from programmer GROUP BY doj;
SELECT MONTH(dob),count(*) as num from programmer GROUP BY dob;
SELECT MONTH(doj),count(*) as num from programmer GROUP BY doj;
SELECT prof1,count(*) from programmer GROUP BY prof1;
SELECT prof2,count(*) from programmer GROUP BY prof2;
SELECT salary,count(*) FROM programmer GROUP BY salary;
SELECT splace, COUNT(*) AS num from studies GROUP BY splace;
SELECT course, COUNT(*) AS num from studies GROUP BY course;
SELECT dev_in, sum(dcost) AS num from software GROUP BY dev_in;
SELECT dev_in, sum(scost) AS sellingcost from software GROUP BY dev_in;
SELECT name, sum(dcost) AS total from software GROUP BY name;
SELECT name, sum(scost*sold) AS cost from software GROUP BY name;
SELECT name, COUNT(*) packages from software GROUP BY name;
SELECT dev_in ,sum(scost) as sellingcost from software GROUP BY dev_in;
SELECT name ,MIN(dcost) AS cheap ,MAX(dcost) AS costliest  FROM software GROUP BY name;
SELECT dev_in ,AVG(DCOST),AVG(SCOST),AVG(SCOST) FROM software GROUP BY dev_in;
SELECT SPLACE,COUNT(course),AVG(ccost) FROM studies GROUP BY splace;
SELECT SPLACE,COUNT(name) FROM studies GROUP BY splace;
SELECT name,sex from programmer;
SELECT name,title FROM software ORDER BY name;
SELECT dev_in, COUNT(title) FROM software GROUP BY dev_in;
SELECT dev_in, COUNT(dcost) AS dcost FROM software WHERE dcost < 1000 GROUP BY dev_in;
SELECT dev_in, AVG(scost - dcost) AS avg_costdifference FROM software GROUP BY dev_in;
-- SELECT 
SELECT MAX(salary), MIN(salary),AVG(salary) FROM   programmer WHERE salary > 2000;

-- ASSIGNMENT 3
SELECT name,MAX(salary) AS max_salary FROM programmer WHERE prof1='c' OR  prof2='c' GROUP BY name  ORDER BY max_salary DESC LIMIT 1;
SELECT name,max(salary) AS max_salary FROM programmer WHERE prof1='COBOL' OR  prof2='COBOL' GROUP BY name ORDER BY max_salary DESC LIMIT 1;
SELECT prof1,MAX(salary) FROM programmer GROUP BY prof1;
SELECT name,MIN(TIMESTAMPDIFF(year,doj,CURDATE())) AS experience FROM programmer GROUP BY name ORDER BY experience ASC LIMIT 1;
SELECT name,MAX(TIMESTAMPDIFF(year,doj,CURDATE())) AS experience FROM programmer GROUP BY name ORDER BY experience DESC LIMIT 1;
-- SELECT prof1,prof2 FROM programmer WHERE prof1 IN ('pascal','clipper','COBOL') AND prof2 NOT IN ('pascal','clipper','COBOL');
SELECT name,TIMESTAMPDIFF(year,dob,CURDATE())  AS age FROM programmer ORDER BY age ASC LIMIT 1;
SELECT splace,count(name) AS most_no FROM studies group by splace ORDER BY most_no DESC LIMIT 1 ;
-- 9
SELECT name FROM programmer WHERE salary >3000 AND prof1 NOT IN ('c','c++','oracle','dbase') AND prof2 NOT IN ('c','c++','oracle','dbase');
SELECT course,MAX(ccost) AS cost FROM studies GROUP BY course ORDER BY cost LIMIT 1;
SELECT course,count(course) AS count FROM studies GROUP BY course ORDER BY count LIMIT 1;
-- SELECT splace,course FROM studies JOIN programmer ON studies.name=programmer.name WHERE salary=min(salary);
SELECT splace FROM studies ORDER BY ccost DESC LIMIT 1;
-- SELECT course ,count(name)FROM studies GROUP BY course LIMIT 1;
SELECT splace,count(course) AS count FROM studies GROUP BY splace ORDER BY count DESC LIMIT 1;
-- 17
SELECT title ,MAX(dcost) AS cost FROM software GROUP BY title ORDER BY cost DESC LIMIT 1;
SELECT title ,MIN(scost) AS cost FROM software GROUP BY title ORDER BY cost DESC LIMIT 1;
SELECT title ,MIN(sold) AS sold FROM software GROUP BY title ORDER BY sold LIMIT 1;
SELECT dev_in,MAX(scost) AS max_sale FROM  software GROUP BY dev_in ORDER BY max_sale DESC LIMIT 1;
-- 22
SELECT title,MAX(scost) AS costlieast FROM software  GROUP BY title ORDER BY costlieast DESC LIMIT 1;
SELECT  dev_in,count(title) AS MOST_NUMBER  FROM software GROUP BY dev_in ORDER BY MOST_NUMBER DESC LIMIT 1;
-- 25
SELECT name,MAX(scost) AS cost FROM software GROUP BY name ORDER BY cost desc LIMIT 1;
SELECT title,MIN(sold) AS sold FROM software GROUP by title ORDER BY sold LIMIT 1;
SELECT name FROM programmer WHERE sex = 'f' AND salary > (SELECT MAX(salary) FROM programmer WHERE sex = 'm' );
SELECT prof1,count(prof1) AS most_know FROM programmer GROUP BY prof1 ORDER BY most_know DESC LIMIT 1;
SELECT name FROM software WHERE scost> (2*dcost);
SELECT dev_in,min(scost) AS min_cost FROM software GROUP BY dev_in order by min_cost limit 1 ; ---
SELECT name,TIMESTAMPDIFF(year,dob,CURDATE()) AS age FROM programmer WHERE sex='m' AND YEAR(dob)=1965 ORDER BY age  LIMIT 1  ;
SELECT name,MAX(dev_in) AS max_dev,MIN(dev_in) AS min_dev FROM software GROUP BY name ORDER BY max_dev,min_dev DESC LIMIT 1;-------
SELECT name FROM programmer WHERE sex='f' AND YEAR(dob)=1992;
SELECT YEAR(dob), COUNT(*) AS num FROM programmer GROUP BY YEAR(dob) ORDER BY num DESC LIMIT 1; 
SELECT month(doj),count(*) AS num FROM programmer GROUP BY month(doj) ORDER BY num DESC LIMIT 1;
SELECT dev_in AS language, COUNT(*) AS num FROM software GROUP BY dev_in ORDER BY num DESC LIMIT 1;
SELECT name FROM programmer WHERE sex ='m' AND salary <(SELECT AVG(salary) FROM programmer WHERE sex = 'f');

-- ASSIGNMENT 4
SELECT * FROM programmer WHERE salary IN (SELECT salary FROM programmer GROUP BY salary HAVING COUNT(*) > 1);
SELECT * FROM software JOIN programmer ON programmer.name = software.name WHERE sex='m' AND salary>3000;
SELECT title FROM software JOIN programmer on programmer.name = software.name WHERE dev_in='pascal' AND sex='f';
SELECT * FROM programmer WHERE YEAR(doj)<1990;
SELECT * FROM software JOIN programmer ON programmer.name = software.name WHERE programmer.sex='f' AND software.dev_in='c';
SELECT software.title,software.sold,count(scost) FROM software JOIN studies ON studies.name = software.name GROUP BY splace;
Select studies.splace, count(software.dev_in), count(software.sold), sum(software.sold*software.scost) from software,studies where software.name=studies.name group by studies.splace;
-- 7
SELECT * FROM software JOIN programmer ON programmer.name = software.name WHERE sex='m' AND YEAR(dob)<1965 or sex='f' AND YEAR(dob)>1975;
---
SELECT s.* FROM software s JOIN programmer p ON s.name = p.name WHERE s.dev_in <> p.prof1;
SELECT s.* FROM software s JOIN programmer p ON s.name = p.name WHERE s.dev_in <> p.prof1 AND s.dev_in <> p.prof2;
select s.* from programmer p,software s,studies st where p.name=s.name and s.name=st.name and sex='m' and splace='sabhari';
SELECT p.name FROM programmer p LEFT JOIN software s ON p.name = s.name WHERE s.name IS NULL;
SELECT SUM(scost) FROM software s,studies st WHERE s.name=st.name and splace='apple';
SELECT a.name,a.doj FROM programmer a,programmer b WHERE a.doj=b.doj and a.name <> b.name;
SELECT p1.name AS programmer1, p2.name AS programmer2, p1.prof2 FROM programmer p1 JOIN programmer p2 ON p1.prof2 = p2.prof2 AND p1.name <> p2.name;
SELECT studies.splace,SUM(software.sold*software.scost) FROM software,studies WHERE studies.name=software.name GROUP BY studies.splace;
--17
--18
SELECT p.name, p.salary, s.course FROM programmer p JOIN ( SELECT name, MAX(scost * sold) AS highest_sales FROM software) AS max_sales ON p.name = max_sales.name JOIN studies s ON p.name = s.name;
SELECT programmer.name, ccost / (salary / 12) AS monthstorecover FROM programmer JOIN studies ON programmer.name = studies.name ;
SELECT s.title AS costliest FROM software s JOIN (SELECT name FROM programmer WHERE TIMESTAMPDIFF(year, doj, CURDATE()) < 3) AS newprogrammers ON s.name = newprogrammers.name ORDER BY scost DESC LIMIT 1;
SELECT AVG(salary) FROM programmer WHERE name IN (SELECT name FROM software GROUP BY name HAVING SUM(scost * sold) > 50000);
SELECT COUNT(s.name) FROM software s,studies st WHERE s.name=st.name GROUP BY s.name,ccost HAViNG MIN(ccost)=(select MIN(ccost) FROM studies);
SELECT COUNT(*) FROM programmer p,software s WHERE s .name=p.name GROUP BY dev_in HAVING MIN(dcost)=(SELECT MIN(dcost) FROM software);
SELECT COUNT(dev_in) FROM programmer p,software s WHERE s.name=p.name AND sex='f' AND salary>(SELECT MAX(salary) FROM programmer p,software s WHERE s.name=p.name and sex='m');
--26
SELECT name,splace FROM studies WHERE name NOT IN(SELECT name FROM software);
SELECT COUNT(*),sum(scost*sold-dcost) "PROFIT" FROM software WHERE dev_in IN (SELECT prof1 FROM programmer) GROUP BY dev_in;
SELECT s.name,COUNT(dev_in) FROM programmer p1,software s WHERE p1.name=s.name GROUP BY s.name;
SELECT * FROM programmer WHERE name IN ( SELECT name FROM studies WHERE splace = 'S.S.I.L.' );