var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexao com bd foi estabelecida');

    return mysql.createConnection({
        host:'localhost',
        user: 'usuario',
        password:'senha',
        database:'banco de dados'
    });
};
    module.exports = function(){
        return connMySQL;
    }
