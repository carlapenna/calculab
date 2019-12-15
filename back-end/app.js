var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Conexão com banco de dados
const db = require('./config/database');
db('mongodb://127.0.0.1:27017/ProjetoLab');
//
var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

var amostra = require('./routes/amostra');
app.use('/amostra', amostra);

var padrao = require('./routes/padrao');
app.use('/padrao', padrao);

var equipamento = require('./routes/equipamento');
app.use('/equipamento', equipamento);

module.exports = app;
