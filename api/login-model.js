
module.exports = {
    getLogin,
}
function getLogin(password)  {
    return  password;
}

function hashString( str ) {
    const bcrypt = require('bcrypt');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(str,salt);

    return str;
}
