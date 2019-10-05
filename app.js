var express = require('express');
var app = express();
app.set(' view engine', 'ejs');
app.get('/',function(req,res){
	res.render("home/index.ejs")
});
app.get('/moda',function(req,res){
	res.render("secao/moda.ejs")
});
app.get('/formulario_add_noticia',function(req,res){
	res.render("admin/form_add_noticia.ejs")
});
app.get('/noticias',function(req,res){
	res.render("noticias/noticia.ejs")
});
app.listen(3000, function() {
  console.log("leo servidor")
});