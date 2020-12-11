var express = require('express')

var app = express()

app.get('/',function(req,res){
	
	res.send('HelloWorld!')
	
})

//specified port
app.listen(3000)