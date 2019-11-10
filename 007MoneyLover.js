var obj = JSON.parse($response.body);

obj= {
	"status": true,
	"data": {
		"expireDate": "2119-11-10T14:34:58.848Z",
		"firstPurchase": "2019-11-10T14:34:58.848Z",
		"lastPurchase": "2019-11-10T14:34:58.848Z",
		"subscribeMarket": "Other",
		"subscribeProduct": "premium_sub_year_1",
		"rwLimit": 10,
		"acceptSync": true,
		"purchased": true
	}
};

$done({body: JSON.stringify(obj)});

//
