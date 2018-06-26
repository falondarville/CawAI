const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport')
  	, LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
const bcrypt = require('bcrypt');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// this is the authentication for the registration form
router.post('/login',
// check if sending through params or body, needs to send through body so it doesn't appear in the URL
 passport.authenticate('local', { successRedirect: '/loggedin',
                                  failureRedirect: '/signup?invalid=true'
                                  })
);

router.post('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;