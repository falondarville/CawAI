const express = require('express');
const router = express.Router();
const cors = require('cors');
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

const db = require('./../models');

// this api grabs data from Watson Personality Insights and also pushes searches and results to the database depending on if a user is logged in
router.post('/api/watson', function(request, response){

	var personalityInsights = new PersonalityInsightsV3({
	  version_date: '2017-10-13',
	  username: process.env.WATSON_USERNAME,
	  password: process.env.WATSON_PASSWORD
	});

	var profileParams = {
	// getting content from front-end input as plain text
	  content: request.body.content,
	  content_type: 'text/plain',
	  consumption_preferences: true,
	  raw_scores: true
	};

	personalityInsights.profile(profileParams, function(error, profile) {
	  // if logged in, save to database with that associated user
	  if(request.user){
	  	
	  	db.UserData.create({ UserId: request.user.id, search: request.body.content , results: JSON.stringify(profile)})
		  	.then(() => console.log("We have saved the search and results successfully."))
		  	.catch(function(error){
		  		console.log(error);
	  	})
		} else {
		 console.log("User is not logged in.")
		}
		 response.json(profile);
		});
});

module.exports = router;