var obj = JSON.parse($response.body);
obj={
	"id": 96800,
	"username": "chankanzu",
	"countryCode": "VN",
	"customerId": "cus_FAqA19HyD6tFHO",
	"firstName": "Tran",
	"lastName": "Khanh Du",
	"email": "chankanzu@gmail.com",
	"blocked": false,
	"roleId": 1,
	"didMigrate": true,
	"createdAt": "2019-06-01T10:30:38.112Z",
	"updatedAt": "2020-05-09T19:44:34.608Z",
	"subscriptions": [{
		"internalTransactionId": "UPWECTBNYNNY1C5",
		"externalTransactionId": "pi_1F9vmPKPeH3mKXAm6DopvkUW",
		"active": true,
		"startDate": "2019-08-21T15:31:48.097Z",
		"endDate": "2061-08-21T15:31:48.095Z"
	}]
};

$done({body: JSON.stringify(obj)});
