const express = require('express');
const passport = require('passport')
  	, LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

// this is the authentication for the login form
router.post('/login',
passport.authenticate('local', { successRedirect: 'http://localhost:3001/loggedin',
                                failureRedirect: 'http://localhost:3001/?invalid=true'
                                })
);

router.post('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;