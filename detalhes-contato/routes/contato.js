module.exports = function(app){
  
    
    app.get('/contato', function(req, res){
        var connection = app.config.dbConnection();
            connection.query('select * from contatos where id = 6', function(error, result){
            
                res.render("contato",{contato : result});
            });
            
        });  
             

}