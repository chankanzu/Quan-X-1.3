var obj = JSON.parse($response.body);

obj= {
	"code": 0,
	"data": {
		"userId": "inrTPiukigOedHWlS0j4d1Rygse2",
		"shortUserId": "732315",
		"email": "user@4english.com",
		"displayName": "Teddy LOL",
		"providerData": "Firebase",
		"expiredTime": "10244015999999",
		"showOxford": false,
		"showOxfordWeb": false,
		"win": 4,
		"lose": 3,
		"setting": {
			"level": "intermediate",
			"goal": "marketing",
			"appVersion": 9012,
			"nativeLanguage": "vi",
			"topics": ["society", "education", "politic"]
		},
		"createAt": 1603960581817
	}
	}
};

$done({body: JSON.stringify(obj)});

//
