//map
let List=[10,20,30,40,50]
let Value=List.map(x=>x*2);
console.log(Value)
//forEach
let value=List.forEach((Element)=>{
    Element+=1
    console.log("Element:",Element);
})
console.log(value);