//https://api.dungmori.com/api/user/login
var obj = JSON.parse($response.body);
obj= {
	"id": 7,
	"email": "dungmori@gmail.com",
	"phone_number": null,
	"name": "Dungmori2",
	"phone": "0983639675",
	"gender": "Nam",
	"avatar": "1524024189_86415_8f14e4_a55c90.jpg",
	"birth": "1985-08-27T07:41:46.207Z",
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
	"fingerprint": "1df7836c-bc6d-4ab9-a9df-53c7027c1138",
	"created_at": "2020-02-22T14:03:26.000Z",
	"is_active_course": 1,
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDIxODk4NDYsImlkIjoxNTUyNDgsImlhdCI6MTU5OTU5Nzg0Nn0.CBsvi0DIdOjDcFOLzn4MBnLY7TMSpKXGJmHybYtl13g"
};

$done({body: JSON.stringify(obj)});


// Descriptions
