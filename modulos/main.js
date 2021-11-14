var app = require ('./config/server');

var rotaHome = require('./routes/home');
rotaHome(app);

var rotaTecnologia = require('./routes/tecnologia');
rotaTecnologia(app);

app.listen(3000, function(){
    console.log("servidor rodando");
});