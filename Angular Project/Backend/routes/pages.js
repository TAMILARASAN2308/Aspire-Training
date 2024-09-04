// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-03-2024
// Last Modified Date : 08-06-2024
// Reviewed By :
// Review Date :

const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render("login");
});

router.get('/register',(req,res)=>{
    res.render("register");
});

router.get('/passenger',(req,res)=>{
    res.render("passenger");
});

router.get('/payment',(req,res)=>{
    res.render("payment");
});
router.get('/confirm',(req,res)=>{
    res.render("confirm");
});
router.get('/search',(req,res)=>{
    res.render("search");
});

router.get('/mybookings',(req,res)=>{
    res.render("mybookings");
});


module.exports=router;