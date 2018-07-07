const express = require('express');
const router = express.Router();
const db = require('./../models');

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