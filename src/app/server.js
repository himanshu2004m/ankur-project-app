'use strict'

const bodyParser = require('body-parser');
var app = require('express')();
var fs=require("fs")
var http = require('http').Server(app);

//const app = express()
app.use(bodyParser.json());
var cities =__dirname +'/'+'tableData.json';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST');
  next();
});

/*
app.get('/', function(req, res){
  res.sendFile(__dirname+'/'+'index.html');
});*/
app.get('/getCities', function(req, res){
  res.sendFile(cities);
});
http.listen(8085, function(){
    console.log(__dirname+"");
  console.log('listening on *:8085');
}); 