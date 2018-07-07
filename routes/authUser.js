const express = require('express');
const passport = require('passport')
  	, LocalStrategy = require('passport-local').Strategy;
const cors = require('cors')
const router = express.Router();
const db = require('./../models');
const app = express();

app.use(cors());

// checks if a user is logged in. If so, grab all the searches associated with that user.
router.post('/authuser', function(request, response){
	if(request.user) {
		db.UserData.findAll({
			where: {userId: request.user.id}
		}).then(function(data){
			response.json(data);
		})
	} else {
		response.status(401);
		response.json({message: "not logged in"})
	}
})

module.exports = router;