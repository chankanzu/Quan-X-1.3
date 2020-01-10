//https://api.quizlet.com/3.4/users/apple-subscription/free-trial

var obj = JSON.parse($response.body);
obj= {
	"responses": [{
		"isInIntroOfferPeriod": false,
		"isTrialPeriod": true,
		"productIdentifier": "com.quizlet.quizlet.teacher.autorenewing.1year.trial30day"
	}]
};

$done({body: JSON.stringify(obj)});
