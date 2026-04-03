const productServices = require('../services/productServices');
const path = require('path');

const getProduct = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","view","product.html"));
}

const addProduct = (req,res)=>{
    const product = req.body.productName
    res.send(product);
}

const getProductById = (req,res)=>{
    const id = req.params.id;
    const message = productServices.getProductById(id);
    res.send(message);
}

module.exports = {
    getProduct,addProduct,getProductById
}