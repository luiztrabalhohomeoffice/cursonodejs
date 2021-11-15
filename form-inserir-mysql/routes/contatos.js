module.exports = function(app){
  
    
    app.get('/contatos', function(req, res){
        var connection = app.config.dbConnection();
        var contatosModel = app.models.contatosModel;

            contatosModel.getContatos(connection, function(error, result){
                res.render("contatos",{contatos : result});
            
            });
            
        });  
             

}