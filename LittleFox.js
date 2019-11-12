var obj = JSON.parse($response.body);
obj= {
	"data": {
		"current_user_id": "U201811112340560107",
		"login_id": "svcntnk42a1@gmail.com",
		"country_code": "US",
		"language_code": "en",
		"www_url": "https:\/\/www.littlefox.com\/en",
		"mobile_url": "https:\/\/m.littlefox.com\/en",
		"users": [{
			"id": "U201811112340560107",
			"type": "S",
			"name": " ",
			"nickname": "Khanh Du",
			"gender": "M",
			"avatar_image_url": "https:\/\/img.littlefox.co.kr\/static\/layout\/global\/img\/contents\/default_badge.png",
			"is_custom_avatar": "N"
		}, {
			"id": "U201811120027560110",
			"type": "S",
			"name": "Jun",
			"nickname": "QuangAnh",
			"birth_year": 2015,
			"gender": "M",
			"avatar_image_url": "https:\/\/img.littlefox.co.kr\/static\/layout\/global\/img\/contents\/default_badge.png",
			"is_custom_avatar": "N"
		}]
	},
	"status": 200
	"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpcy5saXR0bGVmb3guY29tXC9hcGlcL3YxXC9hdXRoXC9jaGFuZ2UiLCJpYXQiOjE1NzM1NzA1NzMsImV4cCI6MTU3NjE2MjU3MywibmJmIjoxNTczNTcwNTczLCJqdGkiOiJFazY3ZUhETkdGc0duWmNkIiwic3ViIjoiVTIwMTgxMTExMjM0MDU2MDEwNyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJhdXRoX2tleSI6IjU4MjIxMjU1NzcyMDkzMjUiLCJjdXJyZW50X3VzZXJfaWQiOiJVMjAxODExMTIwMDI3NTYwMTEwIn0.vvSQrGeU1q4wWEFTT4CardFK2RN8AAlYqpZ2kVtncK8LBKPruNvPd7EbeAy7iFZ9A2uXKDuznwTAGDsYzei-3g"
  };
$done({body: JSON.stringify(obj)});
//
