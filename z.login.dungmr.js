//https://api.dungmori.com/api/user/login
var obj = JSON.parse($response.body);
obj= {
	"id": 15,
	"email": "svcntnk42a1@gmail.com",
	"phone_number": null,
	"name": "Khanh Du",
	"phone": "0123456789",
	"gender": "Nam",
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
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDIxODI3MTEsImlkIjoxMTA0OCwiaWF0IjoxNTk5NTkwNzExfQ.z5WAM0Ka0elJPFbYoRbtZz-q1EyFpyBh9Ksp5jeytSA"
};

$done({body: JSON.stringify(obj)});


// Descriptions
