//Load express module
var exppress = require("express");
var app = exppress();

//Define request response in root URL ('/')
app.get('/', function(req, res){
    res.send('Hello World');
});

//Launch app server on 8080
app.listen(8080, function(){
    console.log('App listening on port 8080');
});