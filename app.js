var express=require('express');
var app=express();
var server=require('http').Server(app);

app.use('/assets',express.static(__dirname+'/assets'));
app.use('/images',express.static(__dirname+'/images'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/pages/index.html',function(){res.end();})
})

server.listen(8084);
