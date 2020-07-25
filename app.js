const express = require("express")
let    app     = express()
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/',function(req,res){
	res.render("land");
});

app.get('/:id/home',function(req,res){
	res.render("land");
});

app.get('/project',function(req,res){
	res.render("project");
});

app.get('/about',function(req,res){
	res.render("about");
});

app.get('*', function(req, res) { 
	res.send('Error. Page not found.'); 
});







app.listen(3000,function(){
    console.log('we are on');
  });