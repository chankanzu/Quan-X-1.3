var obj = JSON.parse($response.body);

obj= {
	"appId": "endless_reader_teacher",
	"catalogSectionsToUpdate": [
		"Cross-Sell"],
	"lastUpdateReceivedTimestamp": 0,
	"isDeviceJailbroken": false,
	"appVersion": "1.0",
	"appVersionOfLastUpdate": "1.0"
};

$done({body: JSON.stringify(obj)});

//
