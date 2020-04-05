
var obj = JSON.parse($response.body);
	"data": {
		"user_infor": {
			"id": 61696,
			"access_token": "Nisr4lQ2RNeMoktH3-Viag",
			"user": {
				"id": 33772,
				"email": "svcntnk42a1@gmail.com",
				"full_name": "Bố Jun",
				"phone_number": null,
				"avatar_url": "https://wewe-production.s3.ap-southeast-1.amazonaws.com/avatars/avatars/normal/a5b201966b9d430ec5859e4773244af42052ae98.?1586083039",
				"birthday": null,
				"introductory_code": "JVUBT8",
				"verified": true,
				"gender": null,
				"oauth2": "facebook",
				"oauth2_id": "3402053019808232",
				"first_login": false,
				"user_vip_package": {
					"name": "\u001dGói VIP thường",
					"package_type": "free_trial",
					"remaining_date": 30,
					"start_date": "05-04-2020",
					"end_date": "05-05-2020"
				}
			}
		}
	}
$done({body: JSON.stringify(obj)});
