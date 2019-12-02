var obj = JSON.parse($response.body);

obj= {
	"response": {
		"purchaseData": {
			"purchases": [{
				"id": "3-months",
				"oldPrice": 490000.0,
				"type": "basic",
				"price": 490000.0,
				"saleOff": 0,
				"title": {
					"vi": "3 THÁNG",
					"en": "3 MONTHS"
				},
				"inapp": {
					"ios": "net.kidsup.inapp.3months",
					"android": "net.kidsup.inapp.3months",
					"windows": "net.kidsup.inapp.3months"
				}
			}, {
				"id": "1-year",
				"oldPrice": 990000.0,
				"type": "popular",
				"price": 990000.0,
				"saleOff": 0,
				"title": {
					"vi": "1 NĂM",
					"en": "1 YEAR"
				},
				"inapp": {
					"ios": "net.kidsup.inapp.1year",
					"android": "net.kidsup.inapp.1year",
					"windows": "net.kidsup.inapp.1year"
				}
			}, {
				"id": "full",
				"oldPrice": 2900000.0,
				"type": "best",
				"price": 2900000.0,
				"saleOff": 0,
				"title": {
					"vi": "TRỌN ĐỜI",
					"en": "PREMIUM"
				},
				"inapp": {
					"ios": "com.perfectthumb.kidsup.full",
					"android": "com.perfectthumb.kidsup.full",
					"windows": "com.perfectthumb.kidsup.full"
				}
			}],
			"paymentMethods": ["cod"],
			"promotion": {
				"vi": "",
				"en": ""
			},
			"promoCode": "KIDSU5",
			"saleOff": 0,
			"saleOff1": "",
			"saleOff2": ""
		},
		"version": {
			"id": 17,
			"os": "ios",
			"versionCode": 199,
			"releaseNote": {
				"vi": "Đã có phiên bản Kids UP mới, bố mẹ hãy nâng cấp ngay cho bé nhé!",
				"en": "There is a new version of Kids UP, don't miss it!"
			},
			"timeoutInDays": 0,
			"updatedAt": 1571072400000
		},
		"event": {
			"id": 1,
			"title": "Vui hè cùng Kids UP",
			"image": "https://i.imgur.com/Bhflhxt.jpg",
			"content": "Tham gia là có quà",
			"createdAt": 1527215663000,
			"expiresAt": 1528279200000,
			"buttons": [{
				"text": "Bỏ qua",
				"link": "close"
			}, {
				"text": "Tham gia",
				"link": "https://fb.com/groups/daycontuduy/212253589557311"
			}]
		},
		"country": "vietnam"
	}
};

$done({body: JSON.stringify(obj)});

//
