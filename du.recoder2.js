var obj = JSON.parse($response.body);

obj= {
	"code": 200,
	"result": [{
		"modelStatus": "NORMAL",
		"Id": 37,
		"appId": "6",
		"itemId": "recorder_1_year",
		"type": "SUBSCRIPTION",
		"duration": 12,
		"durationUnit": "MONTH",
		"freeDays": 7,
		"country": "",
		"sort": 2,
		"versionStart": "160",
		"versionEnd": "9999",
		"extension": {
			"displayPop": false
		},
		"baseItemId": 36,
		"baseItemUnit": 12,
		"selected": true,
		"price": 0,
		"discount": 0,
		"baseItem": "recorder_1_month"
	}, {
		"modelStatus": "NORMAL",
		"Id": 36,
		"appId": "6",
		"itemId": "recorder_1_month",
		"type": "SUBSCRIPTION",
		"duration": 1,
		"durationUnit": "MONTH",
		"freeDays": 999999997,
		"country": "",
		"sort": 1,
		"versionStart": "160",
		"versionEnd": "9999",
		"extension": {
			"displayPop": false
		},
		"baseItemId": 0,
		"baseItemUnit": 0,
		"selected": false,
		"price": 0,
		"discount": 0,
		"baseItem": ""
	}, {
		"modelStatus": "NORMAL",
		"Id": 8,
		"appId": "6",
		"itemId": "recorder_1_year",
		"type": "SUBSCRIPTION",
		"duration": 12,
		"durationUnit": "MONTH",
		"freeDays": 9999999997,
		"country": "",
		"sort": 1,
		"versionStart": "160",
		"versionEnd": "9999",
		"extension": {
			"displayPop": true
		},
		"baseItemId": 0,
		"baseItemUnit": 0,
		"selected": true,
		"price": 0,
		"discount": 0,
		"baseItem": ""
	}],
	"serverTime": 1599925137046
};

$done({body: JSON.stringify(obj)});

//
