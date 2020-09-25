
var obj = JSON.parse($response.body);
obj= {
	"is_forever": true,
	"expiry_date": "01-10-2099",
	"buy_date": "25-09-2020",
	"time_package": {
		"id": 1,
		"name": "Gói cơ bản",
		"description": "",
		"price": 699000,
		"is_trial": false,
		"status": "publish",
		"package_type": "basic_time_package",
		"created_by": "admin_operation",
		"modified_by": "admin_operation"
	}
};

$done({body: JSON.stringify(obj)});

//https://api.umbalena.vn/personal/package/info/
