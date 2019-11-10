var obj = JSON.parse($response.body);

obj= {
	"appId": "endless_numbers_school",
	"catalogSectionsToUpdate": [
		"Cross-Sell"],
	"lastUpdateReceivedTimestamp": 0,
	"isDeviceJailbroken": false,
	"appVersion": "1.0",
	"appVersionOfLastUpdate": "1.0"
};

$done({body: JSON.stringify(obj)});

//
