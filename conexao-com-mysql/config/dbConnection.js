var mysql = require('mysql');
module.exports = function(){
return mysql.createConnection({
    host:'localhost',
    user: 'usuario',
    password:'senha',
    database:'banco de dados'
});
}