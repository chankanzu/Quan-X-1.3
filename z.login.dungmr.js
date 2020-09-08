//https://api.dungmori.com/api/user/login
var obj = JSON.parse($response.body);
obj= {
	"id": 155248,
	"email": "kimngantran1414@gmail.com",
	"phone_number": null,
	"name": "tran thi kim ngan",
	"phone": "0387554630",
	"gender": "Nữ",
	"avatar": null,
	"birth": "1992-11-15T17:00:00.000Z",
	"platform": "android",
	"japanese_level": "N5",
	"address": null,
	"country": "230",
	"skype": null,
	"provider": null,
	"social_id": null,
	"is_tester": 0,
	"setting": "{\"last_notify_id\":90401,\"flashcard_auto_play\":0}",
	"certificate_receive_info": null,
	"is_verify_phone": 0,
	"fingerprint": "05e6d779-2d8e-4158-aac0-e83e0fa6249c",
	"created_at": "2020-02-22T14:03:26.000Z",
	"is_active_course": 1,
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDIxODA5MTYsImlkIjoxNTUyNDgsImlhdCI6MTU5OTU4ODkxNn0.8pqb5-v_Bohu63XglaitM_yFfdMYPYLbyCj8IqQ8tKc"
};

$done({body: JSON.stringify(obj)});


// Descriptions
