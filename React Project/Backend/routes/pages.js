// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-06-2024
// Last Modified Date : 08-08-2024
// Reviewed By :
// Review Date :

const express = require('express');
const router = express.Router();

router.get('/landingpage',(req,res)=>{
    res.render("landingpage");
});

router.get('/login',(req,res)=>{
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

// router.get('/ticket',(req,res)=>{
//     res.render("ticket");
// });



module.exports=router;