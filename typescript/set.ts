//set
const Cars=new Set()
Cars.add("BMW")
Cars.add(1)
Cars.add("supra")
Cars.add(2)
console.log(Cars);
console.log(Cars.has("BMW"));
console.log(Cars.delete(2));
console.log(Cars.size);
console.log(Cars);