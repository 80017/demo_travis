'use strict';

const express = require('express');

const PORT = 5555;

const app = express();

app.get('/',function (req, res) {
 res.send('Hello..................');
});

app.listen(PORT);
console.log('port is:' + PORT);
