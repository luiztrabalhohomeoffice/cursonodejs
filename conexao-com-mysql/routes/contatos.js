var dbConnection = require('../config/dbConnection');
module.exports = function(app){
    var connection = dbConnection();
    app.get('/contatos', function(req, res){

            connection.query('select * from contatos', function(error, result){
            
                res.render("contatos",{contatos : result});
            });
            
        });        

}