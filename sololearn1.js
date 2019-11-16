var obj = JSON.parse($response.body);
obj={
	"deviceID": 30770352,
	"sessionID": "31a7ce64-763f-49f3-ae27-6dd3ba55350d",
	"user": {
		"id": 16386460,
		"email": "svcntnk42a1@gmail.com",
		"name": "Bố Jun",
		"hasAvatar": true,
		"avatarUrl": "https://www.sololearn.com/avatars/f86197b7-e05f-41b5-8055-e2d1fbffa196.jpg",
		"accessLevel": 0,
		"badge": "pro",
		"level": 0,
		"xp": 0,
		"isPro": true
	},
	"status": null
};

$done({body: JSON.stringify(obj)});
