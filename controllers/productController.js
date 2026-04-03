const productServices = require('../services/productServices');

const getProduct = (req,res)=>{
    const products = productServices.getAllProducts();
    res.send(products);
}

const addProduct = (req,res)=>{
    const message = productServices.addProduct;
    res.send(message);
}

const getProductById = (req,res)=>{
    const id = req.params.id;
    const message = productServices.getProductById(id);
    res.send(message);
}

module.exports = {
    getProduct,addProduct,getProductById
}