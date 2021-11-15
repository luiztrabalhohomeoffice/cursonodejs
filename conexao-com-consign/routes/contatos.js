module.exports = function(app){
  
    
    app.get('/contatos', function(req, res){
        var connection = app.config.dbConnection();
            connection.query('select * from contatos', function(error, result){
            
                res.render("contatos",{contatos : result});
            });
            
        });  
             

}