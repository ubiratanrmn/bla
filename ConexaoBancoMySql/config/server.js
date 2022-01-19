var express = require ('express');
var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');

module.exports=app; //o módulo vai retornar a variável app
