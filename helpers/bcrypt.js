const bcryptjs = require('bcryptjs');

const convertTextToHash = ( text = '' ) => {
    const salt = bcryptjs.genSaltSync();
    return bcryptjs.hashSync( text, salt );
}

module.exports = { convertTextToHash }