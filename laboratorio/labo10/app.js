var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoDb = require('./config/mongo')

// Rutas 
var indexRouter = require('./routes/index');
var RegistroRouter = require('./routes/Registro');

var usersRouter = require('./routes/users');

var app = express();

mongoDb.connect(); // conexion a la base 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/Registro', RegistroRouter)

app.use('/users', usersRouter);

module.exports = app;
