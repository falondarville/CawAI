const express = require('express');
const passport = require('passport')
  	, LocalStrategy = require('passport-local').Strategy;
const cors = require('cors')
const router = express.Router();
const db = require('./../models');
const app = express();

app.use(cors());

router.post('/detail/:id', function(request, response){
	if(request.user) {
		db.UserData.findOne({
			where: {userId: request.user.id, id: request.params.id}
		}).then(function(data){
			response.json(data);
		})
	} else {
		response.status(401);
		response.json({message: "not logged in"})
	}
})

module.exports = router;