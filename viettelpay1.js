//https://vtpay9.viettel.vn/shake-2020/user/gifts/count
var obj = JSON.parse($response.body);
obj= {
	"status": {
		"code": "00",
		"message": "Thành công",
		"description": null
	},
	"data": [{
		"name": "BỘ PHÚ QUÝ AN KHANG",
		"giftCount": [{
			"code": "PHU",
			"count": 100
		}, {
			"code": "QUY",
			"count": 100
		}, {
			"code": "AN",
			"count": 90
		}, {
			"code": "KHANG",
			"count": 100
		}]
	}, {
		"name": "BỘ TÂN XUÂN THỊNH VƯỢNG",
		"giftCount": [{
			"code": "TAN",
			"count": 100
		}, {
			"code": "XUAN",
			"count": 100
		}, {
			"code": "THINH",
			"count": 20
		}, {
			"code": "VUONG",
			"count": 81
		}]
	}, {
		"name": "BỘ PHÚC LỘC THỌ TÀI",
		"giftCount": [{
			"code": "PHUC",
			"count": 20
		}, {
			"code": "LOC",
			"count": 10
		}, {
			"code": "THO",
			"count": 4
		}, {
			"code": "TAI",
			"count": 39
		}]
	}, {
		"name": "BỘ Ý NGUYỆN DUYÊN LÀNH",
		"giftCount": [{
			"code": "Y",
			"count": 4
		}, {
			"code": "NGUYEN",
			"count": 56
		}, {
			"code": "DUYEN",
			"count": 23
		}, {
			"code": "LANH",
			"count": 43
		}]
	}]
};
$done({body: JSON.stringify(obj)});

//
