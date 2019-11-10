var obj = JSON.parse($response.body);

obj= {
	"status": true,
	"data": {
		"expireDate": "2118-04-29T03:55:49.703Z",
		"firstPurchase": "2018-04-29T03:55:49.703Z",
		"lastPurchase": "2018-04-29T03:55:49.703Z",
		"subscribeMarket": "Other",
		"subscribeProduct": "premium_sub_year_1",
		"rwLimit": 10,
		"acceptSync": true,
		"purchased": true
	}
};

$done({body: JSON.stringify(obj)});

//
