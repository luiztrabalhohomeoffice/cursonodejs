module.exports  = function(){
    this.getContatos = function(connection, callback){
        connection.query('select * from contatos', callback);
    }

    this.getContato = function(connection, callback){
        connection.query('select * from contatos where id = 6',callback)
    }

   this.cadastrarContatos = function(contatos, connection, callback){
       connection.query('insert into contatos set ?', contatos, callback)
   }
        return this;
    }

