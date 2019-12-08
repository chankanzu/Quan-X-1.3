var obj = JSON.parse($response.body);

obj= {
	"code": 200,
	"data": {
		"userId": "2fwiWLaVkvg3IxakMqhn6AH8DkA3",
		"shortUserId": "740187",
		"email": "svcntnk42a1@gmail.com",
		"displayName": "Khánh Dư Trần",
		"providerData": "Firebase",
		"expiredTime": 0,
		"showOxford": true
	}
};

$done({body: JSON.stringify(obj)});

//

// Descriptions
