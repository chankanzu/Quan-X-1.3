var obj = JSON.parse($response.body);

obj= {
	"appId": "endless_wordplay_school",
	"catalogSectionsToUpdate": [
		"Cross-Sell"],
	"lastUpdateReceivedTimestamp": 0,
	"isDeviceJailbroken": true,
	"appVersion": "2.0",
	"appVersionOfLastUpdate": "2.0"
};

$done({body: JSON.stringify(obj)});

//
