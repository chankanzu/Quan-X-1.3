var obj = JSON.parse($response.body);

obj= {
	"status": 1,
	"error": null,
	"secretKey": "FyFmsBCHWHtzNplwUiki",
	"data": {
		"premium": 1,
		"premiums": [{
			"id": "99124",
			"user_id": "1266291",
			"premium_type_id": "1",
			"start_time": "2020-03-13 19:38:02",
			"end_time": "2220-03-16 23:59:59",
			"renewal_date": "2020-03-13 19:38:02",
			"transaction_id": "redeem-00006598",
			"modify_by": "1"
		}]
	},
	"api_version": "1.0"
};

$done({body: JSON.stringify(obj)});

