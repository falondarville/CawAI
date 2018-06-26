var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
require('dotenv').config()
var cors = require('cors');
var nodemon = require('nodemon');
var mysql = require('mysql');
const bcrypt = require('bcrypt');
const db = require('./models');

var watsonRouter = require('./routes/watson')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addUserRouter = require('./routes/addUser');

var app = express();

var port = process.env.port || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', watsonRouter);
app.use('/', addUserRouter);

// app.use('/', express.static('client/build'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// sync with database
db.sequelize.sync().then(function(){
	app.listen(port, () => console.log(`Listening on port ${port}`));
})

module.exports = app;
