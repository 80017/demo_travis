'use strict';

const express = require('express');
var fs = require('fs');

const PORT = 5555;

const app = express();

app.get('/',function (req, res) {
 
 var img = fs.readFileSync('./ob.png');
	res.writeHead(200, {'Content-Type': 'image/png' });
     	res.end(img, 'binary');
 
# res.send('Welcome To FLOWZ...................');
});

app.listen(PORT);
console.log('port is:' + PORT);
