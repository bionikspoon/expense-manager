'use strict';

var express = require('express');
var morgan = require('morgan');


var app = express();
var port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static('dist'));

app.listen(port);
