const express = require('express');
const router = express.Router();
const cors = require('cors');
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

const db = require('./../models');

// this api grabs data from Watson Personality Insights and also pushes searches and results to the database depending on if a user is logged in
router.get('/api/watson', function(request, response){

	var personalityInsights = new PersonalityInsightsV3({
	  version_date: '2017-10-13',
	  username: process.env.WATSON_USERNAME,
	  password: process.env.WATSON_PASSWORD
	});

	var profileParams = {
	// getting content from front-end input as plain text
	  content: request.query.content,
	  content_type: 'text/plain',
	  consumption_preferences: true,
	  raw_scores: true
	};

	personalityInsights.profile(profileParams, function(error, profile) {
	  if (error) {
	    console.log(error);
	  } else {
	    console.log(JSON.stringify(profile, null, 2));
	  }
	  // if logged in, save to database with that associated user
	  if(request.user){

	  } else {

	  }
	  response.json(profile);
	});


});

module.exports = router;
