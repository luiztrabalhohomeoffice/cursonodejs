var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexao com bd foi estabelecida');

    return mysql.createConnection({
        host:'mysql.queroaprenderexcel.com.br',
        user: 'queroaprendere',
        password:'morpheus1007',
        database:'queroaprendere'

    });
};
    module.exports = function(){
        return connMySQL;
    }
