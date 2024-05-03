const express=require('express');
const App=express();
App.get('/',(request,response)=>{
    response.send(`<h1>Hello World<h1>`);
})
App.get('/log',(request,response)=>{
    response.send(`<h1>Login<h1>`);

})
App.listen(3000,()=>{
    console.log("server running")
})

