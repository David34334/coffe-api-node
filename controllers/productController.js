const { request, response } = require("express");
const { getAllProducts, saveProductsInJsonFile } = require("../helpers/manageFileProducts");
const Product = require("../models/product");


const getProducts = ( req = request, res = response ) => {

    const products = getAllProducts();

    res.json({
        msg: 'GET Products',
        products
    });

}

const postProducts = ( req = request, res = response ) => {

    const { name, description, price } = req.body;
    const products = getAllProducts();

    const product = new Product( name, description, price );

    products[ product.id ] = product;

    saveProductsInJsonFile( products );

    res.json({
        msg: 'Created Product',
        product
    });

}

const putProducts = ( req = request, res = response ) => {

    const { idProduct } = req.params;
    const { name, description, price, status } = req.body;
    const products      = getAllProducts();
    
    if ( !products.hasOwnProperty( idProduct ) ) return res.status(400).json({
        msg: `No existe un producto con el ID: ${idProduct}`
    });

    const productEdit = new Product();
    const product = productEdit.updateProduct( idProduct, name, description, price, status );

    res.json({
        msg: 'PUT Product route',
        idProduct,
        product
    });

}

module.exports = { getProducts, postProducts, putProducts }