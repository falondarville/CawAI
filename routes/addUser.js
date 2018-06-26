const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var router = express.Router();
var bcrypt = require('bcrypt');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

router.post('/users', function(request, response){

	// get variables from form input
	var email = request.body.email;
	var password = request.body.password;
}

// check to see if the user is already registered in the database
function checkEmail(email){

	db.Users.findOne({
		where: {
			email: email
		}
	}).then(function(data){

		if (data == null){
			addUser(email, password);
		} else {
			throw {error: 1};
		}
		
	}).catch(function(error){

		response.status(422);
		response.json({message: "There was an error.", data: {email: "This email is already in use."}})
		return;
	})
}

function addUser(email, password){
	
	bcrypt.hash(password, 10, function(err, password) {

		db.Users.create({
			email: email,
			password: password
		}).then(function(data){
			response.status(200);
			response.json(data);
		}).catch(function(error){
			response.status(500);
		});
		checkEmail(email);
	});
}

module.exports = router;