
// Title : NODE JS
// Author : TAMILARASAN M
// Created At : 27-04-2024
// Last Modified Date : 27-04-2024
// Reviewed By :
// Review Date : 
const fs=require('fs');
const path=require('path');
//read file
fs.readFile(path.join(__dirname,'sample.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});
// write file
let content='Aspire systems';
fs.writeFile(path.join(__dirname,'sample.txt'),content,(err)=>{
    if (err) throw err;
    console.log("Append complete");
});