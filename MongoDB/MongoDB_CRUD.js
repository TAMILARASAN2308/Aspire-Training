// Show existing databases
show databases;

// Switch to the 'class' database
use class;

// Show collections 
show collections;

// Insert documents into the 'students' collection
db.students.insertOne({"_id":1,"name":"tamil","department":"CSE"});
db.students.insertOne({"_id":2,"name":"afru","department":"MECH"});
db.students.insertMany([
    {"_id":3,"name":"muthu","department":"CSE"},
    {"_id":4,"name":"naresh","department":"MECH"},
    {"_id":5,"name":"sugu","department":"ECE"}
]);

// Delete a document with _id: 1 from the 'students' collection
db.students.deleteOne({ "_id": 1 });

// Delete documents where department is "MECH" from the 'students' collection
db.students.deleteMany({ "department": "MECH" });

// Insert multiple documents into the 'students' collection with unordered insert (ignores duplicates)
db.students.insertMany([
    {"_id":3,"name":"muthu","department":"CSE"},
    {"_id":4,"name":"naresh","department":"MECH"},
    {"_id":5,"name":"sugu","department":"ECE"},
    {"_id":6,"name":"krish","department":"CSE"},
    {"_id":4,"name":"sakthi","department":"MECH"},
    {"_id":7,"name":"hussain","department":"CSE"}
], {ordered:false});

// Find all documents in the 'students' collection
db.students.find({});

// Rename 'students' collection to 'studentsDetails'
db.students.renameCollection("studentsDetails");

// Drop the 'studentsDetails' collection
db.studentsDetails.drop();

// Insert documents into the 'employees' collection
db.employees.insertMany([
    { "_id":1, "emp_name":"tamil", "emp_salary":35000, "known_language":["python","java"], "fav_subject":{ "1":"python", "2":"web development"} },
    { "_id":2, "emp_name":"afru", "emp_salary":40000, "known_language":["python","C"], "fav_subject":{ "1":"python", "2":"web development"} },
    { "_id":3, "emp_name":"krish", "emp_salary":55000, "known_language":["python","java"], "fav_subject":{ "1":"ML", "2":"DSA"} },
    { "_id":4, "emp_name":"hussain", "emp_salary":55000, "known_language":["C","java"], "fav_subject":{ "1":"programming in C", "2":"web development"} }
]);

// Find all documents 
db.employees.find({});

// where 'emp_name' is "tamil" 
db.employees.find({"emp_name":"tamil"});

// where '_id' is 1 or 4 
db.employees.find({"_id":{$in:[1,4]}});

// where '_id' is 1 and 'emp_salary' is less than 40000 
db.employees.find({"_id":1,"emp_salary":{$lt:40000}});

// where 'emp_salary' is 35000 or 40000 
db.employees.find({$or:[{"emp_salary":35000},{"emp_salary":40000}]});

// where '_id' is 1 and 'emp_salary' is 35000 or 40000 
db.employees.find({"_id":1,$or:[{"emp_salary":35000},{"emp_salary":40000}]});

// Delete the database
use class;
db.dropDatabase();
