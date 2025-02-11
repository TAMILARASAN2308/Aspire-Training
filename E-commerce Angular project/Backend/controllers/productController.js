// Title : FLIGHT BOOKING
// Author : TAMILARASAN M
// Created At : 24-05-2024
// Last Modified Date : 08-011-2024
// Reviewed By :
// Review Date :


const productModel=require('../models/productModel');

exports.getProducts = async (req,res)=>{
    try{
    const query = req.query.keyword?{
        name:{
            $regex: req.query.keyword,
            $options: 'i'
        }
    }:{}
    const products = await productModel.find(query);
    res.json({
        success:true,
        message:'Get products working!',
        products
    })
}catch(error){
    res.status(404).json({
        success:false,
        message:error.message
    })
}
}

exports.getSingleProduct = async (req,res)=>{
    try{
        const id = req.params.id;
        // console.log(id);
        const product = await productModel.findById(id);
        res.json({
            success:true,
            message:'Get single products working!',
            product
    })
    }catch (error){
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}

const orderModel = require('../models/orderModel');

exports.getAllProducts = async (req, res) => {
    try {
        const allOrders = await orderModel.find(); // Fetches all orders
        res.json({
            success: true,
            message: 'Fetched all orders successfully!',
            orders: allOrders 
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
