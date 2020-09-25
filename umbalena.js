var obj = JSON.parse($response.body);

obj= {
	"id": 13975,
	"username": "khanhdu_vn_1",
	"password": "pbkdf2_sha256$36000$ycIm4IH3x1R6$zh2bjaVXHlDyIeYtm0L8QWKm6lA78OEAvSHkVQ6NPX0=",
	"is_active": true,
	"full_name": "Khanh Du",
	"email": "",
	"gender": null,
	"phone": "+84984620985",
	"address": null,
	"country": "vn",
	"city": null,
	"identification_card": null,
	"packages": [1],
	"avatar": null,
	"kid_personal_rel": [4920],
	"kid_limit": 2,
	"birth_date": null,
	"personalpackage_set": [{
		"personal": 13975,
		"package__name": "Gói cơ bản",
		"expiry_date": "01/10/2099",
		"is_active": true
	}],
	"is_lock": false,
	"expiry_date": "10/01/2020 09:27",
	"date_joined": "25-09-2020 16:25",
	"service_type": "Miễn phí",
	"referral__barcode": "CN_0013975",
	"referral_use__barcode": null,
	"point_bonus": 0,
	"referral_url": "https://umbalena.vn/gioithieu/CN_0013975/",
	"referral_barcode": null,
	"referral_use__phone": null,
	"country__name": "Vietnam (Việt Nam)",
	"provider": "personal"
};

$done({body: JSON.stringify(obj)});

//
