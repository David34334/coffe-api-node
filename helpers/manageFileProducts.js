const fs = require('fs');

const ROUTE_FILE_PRODUCTS = './database/products.json';

const getAllProducts = () => {
    const product = fs.readFileSync( ROUTE_FILE_PRODUCTS, { encoding: 'utf-8' } );
    return JSON.parse( product );
}

const saveProductsInJsonFile = ( data ) => {
    fs.writeFileSync( ROUTE_FILE_PRODUCTS, JSON.stringify( data ) );
}

module.exports = { getAllProducts, saveProductsInJsonFile }