module.exports = function(app){

    app.get('/formcontatos', function(req, res){
        res.render("formcontatos");
    });

    app.post('/cadastrar', function(req, res){
        var contatos = req.body;
        

        var connection = app.config.dbConnection();
        var contatosModel = app.models.contatosModel;

            contatosModel.cadastrarContatos(contatos, connection, function(error, result){
                res.redirect('/contatos')
            
            });
    });

};