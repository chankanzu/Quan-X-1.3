var obj = JSON.parse($response.body);

obj= {
	"id": "7054",
	"email": "education@shapr3d.com",
	"subscriptionType": "edu",
	"subscriptionExpires": "2021-05-22T09:14:44.394Z",
	"hasEmail": true,
	"hasPassword": true,
	"hasFacebookID": false
};

$done({body: JSON.stringify(obj)});

//
