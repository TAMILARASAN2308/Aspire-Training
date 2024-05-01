// synchronous is blocking
// Asynchronous is non-blocking
console.log("wait");
//setTimeout
setTimeout(()=>{
    console.log("complete")
},2000);
//setInterval
setInterval(()=>{
    console.log("interval");
},1000);
//asyn and await(always returns a promise)
const promise=new Promise((resolve,reject)=>{
    const rollnumber=Math.floor(Math.random() * 2);
    if(rollnumber===1){
        resolve('success');
    }else{
        reject('failed');
    }
})
const example=async ()=>{
    try{
        res= await promise;
        console.log(res);
        console.log('bye');
    }catch(err){
        console.log(err);
    }
}
example();