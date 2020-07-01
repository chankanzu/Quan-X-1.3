var obj = JSON.parse($response.body);

obj= {
	"id": "999",
	"email": "yourmail@gmail.com",
	"subscriptionType": "edu",
	"subscriptionExpires": "2099-05-22T09:14:44.394Z",
	"hasEmail": true,
	"hasPassword": true,
	"hasFacebookID": false
};

$done({body: JSON.stringify(obj)});

//
