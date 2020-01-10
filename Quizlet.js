
var obj = JSON.parse($response.body);
obj= {
	"responses": [{
		"models": {
			"user": [{
				"id": 153309807,
				"username": "loannguyenbn",
				"timestamp": 1575800550,
				"lastModified": 1578667492,
				"type": 2,
				"isLocked": false,
				"_imageUrl": "https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=150,onerror=redirect,w=150/https://lh4.googleusercontent.com/-j1XUUoK-m_Y/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfBNndCuvITCW6k0FzgMn1JuGEsng/s96-c/photo.jpg",
				"timeZone": "Asia/Ho_Chi_Minh",
				"birthYear": 1990,
				"birthMonth": 1,
				"birthDay": 25,
				"isConfirmed": true,
				"selfIdentifiedTeacherStatus": 1,
				"profileImageId": 1,
				"email": "chankanzu44@gmail.com",
				"_hasPassword": false,
				"_hasFacebook": false,
				"_hasGoogle": true,
				"_canChangeUsername": true,
				"_isEligibleForFreeTrial": false,
				"_isUnderAge": false,
				"_isUnderAgeForAds": false,
				"_isUnderAgeOrInCoppaTransition": false,
				"_needsChildDirectedTreatment": false,
				"webLocale": "vi",
				"mobileLocale": "vi",
				"userLocalePreference": null,
				"srsNotificationTime": 28800,
				"srsEmailNotificationsEnabled": false,
				"srsPushNotificationsEnabled": true
			}]
		}
	}]
};

$done({body: JSON.stringify(obj)});
