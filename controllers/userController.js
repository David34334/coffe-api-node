const { request, response } = require("express");

/* Helpers */
const { convertTextToHash } = require("../helpers/bcrypt");


const getUser = ( req = request, res = response ) => {

    const { from = 0, limit = 5 } = req.query;

    res.send({
        msg: 'Hola desde GET Method',
        from,
        limit
    });

}

const postUser = ( req = request, res = response ) => {

    const user = req.body;

    /* Encriptar la contraseña */
    user.password = convertTextToHash( user.password );

    res.json({
        msg: 'From POST Api user',
        user
    });

}


module.exports = { getUser, postUser }