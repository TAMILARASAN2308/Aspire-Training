//list
let department = ["cse", "ece"]; 
department.push("EEE");
department.push("MBA");
console.log(department);
//pop
lastValue=department.pop();
console.log(lastValue);
//unshift
firstValue=department.unshift();
console.log(firstValue);

console.log(department[0]);
department[1] = "mechanical";
console.log(department);

//length
let departmentLength = department.length; 
//slice 
let departmentCopy = department.slice();

//for loop
let List=[1,2,3,4,5,6,7,8]
let sum=0;
for(let i=0;i<List.length;i++){
    sum+=List[i]
}
console.log(sum);
