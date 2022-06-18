const { Router } = require("express");
const { check } = require("express-validator");

/* Controllers */
const { getProducts, postProducts, putProducts } = require("../controllers/productController");
const { validateParamsOrHeaders } = require("../middlewares/validate-fields");

const router = Router();

router.get( '/', getProducts );

router.post( '/', [
//    check('id', 'ID is required').notEmpty({ignore_whitespace: ' '}),
    check('name', 'Name product is required.').notEmpty({ignore_whitespace: ' '}),
    check('description', 'Description product is required.').notEmpty({ignore_whitespace: ' '}),
    check('price', 'Prices product is required.').notEmpty({ignore_whitespace: ' '}),
    validateParamsOrHeaders
], postProducts );

router.put( '/:idProduct', [
    check('idProduct', 'You must provider a product ID ').notEmpty({ignore_whitespace: ' '})
], putProducts );

module.exports = router;