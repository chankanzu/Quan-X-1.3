var obj = JSON.parse($response.body);

obj= {
	"success": true,
	"msg_type": "success",
	"msg": "\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3057\u305f",
	"user_id": 730107,
	"uuid": "b9900c5f-fc70-4453-964a-65a6c03c54b1",
	"login_type": "none",
	"readable": true,
	"expires": 4086356907000,
	"status": "welcome",
	"pay_kind": "",
	"email": "9b838806e19142706f04e2fe6a74945e"
};

$done({body: JSON.stringify(obj)});

//
