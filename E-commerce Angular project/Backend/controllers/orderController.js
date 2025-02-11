// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-011-2024
// Reviewed By :
// Review Date :


const orderModel = require('../models/orderModel');
const productModel=require('../models/productModel');

exports.createOrder = async(req,res)=>{
    //console.log(req.body,'DATA');
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2);
    // console.log(amount,'AMOUNT');
    const status = 'pending';
    const order = await orderModel.create({cartItems,amount,status})

    // updating product stock
    cartItems.forEach( async (item) => {
        const product = await productModel.findById(item.product._id);
        console.log(product);
        product.stock = product.stock - item.qty;
        await product.save();
    });
    
    res.json({
        success:true,
        message:'Order works!',
        order
    })
}