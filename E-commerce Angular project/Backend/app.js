// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-011-2024
// Reviewed By :
// Review Date :


const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDatabase = require('./config/database')
dotenv.config({path: path.join(__dirname,'config','config.env')});


const products = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();

// app.use(express.urlencoded({extended:false}));
app.use(cors()); 
app.use(express.json());
app.use('/api/v1/', products);
app.use('/api/v1/', orders);

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server listening to port${port}`)
})