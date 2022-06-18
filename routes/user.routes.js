const { Router } = require("express");
const { check } = require("express-validator");

/* Controllers */
const { getUser, postUser } = require("../controllers/userController");

/* Middlewares */
const { validateParamsOrHeaders } = require("../middlewares/validate-fields");

const router = Router();

/* Get Users list */
router.get( '/', [
    check('limit', 'Limit param must be a number!').isNumeric(),
    check('from', 'From param must be a number!').isNumeric(),
    validateParamsOrHeaders
], getUser );

/* POST User List */
router.post('/', [
    check('name', 'Name is required.').notEmpty({ignore_whitespace: ' '}).isString(),
    check('email', 'Email valid is required.').notEmpty({ignore_whitespace: ' '}).isEmail(),
    check('password', 'Password is required and must be 7+ characters.').notEmpty({ignore_whitespace: ' '}).isString().isLength({min: 7}),
    check('role', 'Role is required.').notEmpty({ignore_whitespace: ' '}).isString(),
    validateParamsOrHeaders
], postUser );


module.exports = router;