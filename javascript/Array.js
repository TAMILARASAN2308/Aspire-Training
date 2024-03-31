let array=[];
//adding elements
array[0]=1;
array[1]="tamil"
array[2]=true
console.log(array)
//length
console.log(array.length);
//push
array.push(2);
array.push("afru");
array.push(true);
console.log(array);
//pop
array.pop();
console.log(array);
//unshift
array.unshift("naresh");
console.log(array);
//shift
array.shift();
console.log(array);
//delete 
delete array[3];
console.log(array);
//splice
array.splice(3,1);
array.splice(1,2);
console.log(array);
array.splice(1,0,"tamil");
array.splice(2,0,2);
array.splice(array.length,0,3);
array.splice(array.length,0,"sugu");
console.log(array);
//slice
let array_1=array.slice(4,);
console.log(array_1);
array_1=array.slice(2,4);
console.log(array_1);
//reverse
reverse_array=array.reverse();
console.log(reverse_array);
//join
let new_array=[4,"muthu",true,5,"naresh",true];
new_array=new_array.join()
console.log(new_array);
//split
new_array=new_array.split(",");
console.log(new_array);
//concat
console.log(array);
console.log(new_array);
concat_array=array.concat(new_array);
console.log(concat_array);
//spread operator
let spread_array=[...array,...new_array];
console.log(spread_array);
// Converting Array to the String
let str_array= array.toString();
console.log(str_array);
//indexof
console.log(array.indexOf("tamil"));
//sort
let sort_array=[2,6,1,8,3];
sort_array.sort();
console.log(sort_array);