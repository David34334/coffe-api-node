const express = require('express');
const cors    = require('cors');
require('dotenv').config();

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.userRoute = '/api/users';
        this.products  = '/api/products';

        /* Middlewares */
        this.middlewares();

        /* Routes */
        this.routes();
    }

    middlewares() {

        /* Cors */
        this.app.use( cors() );

        /* JSON */
        this.app.use( express.json() );

        /* Directorio público */
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.userRoute, require('../routes/user.routes') );
        this.app.use( this.products, require('../routes/products.routes'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

}

module.exports = Server;