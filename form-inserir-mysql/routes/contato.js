const contatosModel = require("../models/contatosModel");

module.exports = function(app){
  
    
    app.get('/contato', function(req, res){
        var connection = app.config.dbConnection();
        var contatosModel = app.models.contatosModel;

            contatosModel.getContato(connection, function(error, result){
            
                res.render("contato",{contato : result});
            });
            
        });  
             

}