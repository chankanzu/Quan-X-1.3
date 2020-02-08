var obj = JSON.parse($response.body);

obj.userInfo.subscriptionsInfo=
{
      "appId": 0,
			"level": 10,
			"expiration": 1975866787000,
			"type": "ADSK_GRANTED_USERS_AUTODESK_EDUCATION_BUNDLE",
			"subscribed": true,
			"start_timestamp": 1581172387,
			"expiry_timestamp": 1975866787
    };
$done({body: JSON.stringify(obj)});

// Descriptionsp
© 2020 GitHub, Inc.
