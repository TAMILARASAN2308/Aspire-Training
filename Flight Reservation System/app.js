// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-07-2024
// Reviewed By :
// Review Date : 

const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');
const hbs = require('hbs');
const app = express();

// for security porpose
dotenv.config({
    path:"./.env",
});

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,  
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mysql connection success");
    }
})

app.use(express.urlencoded({extended:false})); 

const location = path.join(__dirname,'./public');
app.use(express.static(location));
app.set('view engine','hbs'); 

const partialsPath=path.join(__dirname,"./views/partials");
hbs.registerPartials(partialsPath);



// route 
// app.get('/',(req,res)=>{
//     // res.send("<h1>Hello !</h1>")
//     res.render("index");
// });
// app.get('/register',(req,res)=>{
//     res.render("register");
// });

app.use('/',require("./routes/pages"))  // router-level middleware , it used to grouping related routes together.
app.use('/auth',require("./routes/auth"))

app.get('/admin', (req, res) => {
    res.render('admin'); 
});

app.listen(8000,()=>{
    console.log("server started @ port 8000")
})

