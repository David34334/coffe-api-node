const { v4 } = require('uuid');
const dayjs  = require('dayjs');
const { getAllProducts, saveProductsInJsonFile } = require("../helpers/manageFileProducts");

const day = dayjs();

class Product {

    constructor( name, description, price ) {
        this.id = v4();
        this.name = name;
        this.description = description;
        this.price = price;
        this.state = true;
        this.createdAt = day.format('DD-MM-YYYY h:mm A').toString();
        this.lastUpdated = null;
    }

    updateProduct( id, name, description, price, state ) {
        const products = getAllProducts();
        const productEdit = products[ id ];

        if ( productEdit ) {
            productEdit.name        = name;
            productEdit.price       = price;
            productEdit.state       = state;
            productEdit.description = description;
            productEdit.lastUpdated = day.format('DD-MM-YYYY h:mm A').toString();

            products[ id ] = productEdit;
            saveProductsInJsonFile( products );
            return products[ id ];
        }

        return { msg: 'Error al momento de actualizar el producto.' };

    }

}

module.exports = Product;