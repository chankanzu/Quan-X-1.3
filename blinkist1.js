  
var obj = JSON.parse($response.body);

obj= {
	"user_access": {
		"id": "5c5fa7fdd32d7a00108f7823",
		"etag": 15739089269390,
		"type": "premium",
		"marketplace": "itunes",
		"valid_until": "2119-11-23T09:14:44.000+00:00",
		"will_renew": true,
		"trial": "softpaywall",
		"can_start_trial": false
	}
};

$done({body: JSON.stringify(obj)});

// Descriptions
