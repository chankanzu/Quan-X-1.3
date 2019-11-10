var obj = JSON.parse($response.body);
obj= {
	"appId": "endless_learning_school",
	"catalogSectionsToUpdate": [

	],
	"lastUpdateReceivedTimestamp": 1570927703142,
	"isDeviceJailbroken": false,
	"appVersion": "1.0",
	"appVersionOfLastUpdate": "1.0"
};

$done({body: JSON.stringify(obj)});

//
