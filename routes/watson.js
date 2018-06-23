var express = require('express');
var router = express.Router();
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

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
	  response.json(profile);
	});
});

module.exports = router;
