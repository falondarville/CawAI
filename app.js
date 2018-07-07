const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config()
const cors = require('cors');
const nodemon = require('nodemon');
const mysql = require('mysql');
const mysql2 = require ('mysql2');
const bcrypt = require('bcrypt');
const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const db = require('./models');

// API routes
const watsonRouter = require('./routes/watson')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const addUserRouter = require('./routes/addUser');
const loginRouter = require('./routes/login');
const authRouter = require('./routes/authUser');
const detailRouter = require('./routes/detail');

const port = process.env.port || 3000;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(session({
  secret: "double macchiato STAT",
  resave: true,
  name: "oatmealRaisin",
  proxy: true,
  saveUninitialized: true
}));

// passport initialize and serialize
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done){
  done(null, user.id);
})

passport.deserializeUser(function(id, done){
  db.Users.findById(id).then(function(user){
    console.log(user);
    if(user){
      done(null, user.get());
    } else {
      done(user.errors, null);
    }
  })
})

app.use('/', express.static('client/build'));

// use API routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', watsonRouter);
app.use('/', addUserRouter);
app.use('/', loginRouter);
app.use('/', authRouter);
app.use('/', detailRouter);

// passport log in authentication
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
},
  function(username, password, done) {
    db.Users.findOne({ 
      where:{ email: username }
      }).then(function(user){
        if (user == null) {
          return done(null, false, {message: 'Incorrect credentials'})
        }
        bcrypt.compare(password, user.password, function(err, res){
          if(res) {
              done(null, user)
          } else {
              done(null, false, { message: 'Incorrect password.' })
          }
      });
    })
   }
))

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
