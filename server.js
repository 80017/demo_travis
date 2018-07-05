'use strict';

const express = require('express');
const PORT = 5555;

const app = express();

app.get('/',function (req, res) {
   res.send('Welcome To FLOWZ...................');
});

app.listen(PORT);
console.log('port is:' + PORT);


//var express = require('express');		
//var fs = require('fs');		
		
//var app = express()		
 		
//app.get('/', function (req, res) {		
//	var img = fs.readFileSync('./officebeacon.png');		
//	res.writeHead(200, {'Content-Type': 'image/png' });		
//     	res.end(img, 'binary');		
      // res.send('Hello World')		
//})		
 		
//app.listen(5555)





