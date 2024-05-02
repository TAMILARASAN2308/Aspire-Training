//set
const student = new Set();
student.add("afru");
student.add("sugu");
student.add("naresh");
console.log(student);

console.log(student.has("afru"));
console.log(student.delete("naresh"));
console.log(student.size);
console.log(student);

//keys and values
const employee = {};
employee["id"]=1;
employee["name"]="hussain";
employee["department"]="cse";
employee["age"]=21;

console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(employee);
