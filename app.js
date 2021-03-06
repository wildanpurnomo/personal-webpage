const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/public', express.static("public"));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/skills', function(req, res){
    res.render('skills');
});

app.get('/interests', function(req, res){
    res.render('hobby');
});

app.get('/projects', function(req, res){
    res.render('projects');
});

app.listen(PORT, function(){
    console.log("Server started");
});