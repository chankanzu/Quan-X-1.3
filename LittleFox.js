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
};
$done({body: JSON.stringify(obj)});
//
