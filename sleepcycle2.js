var obj = JSON.parse($response.body);

obj= {
	"status": "ok",
	"sessions": {
		"status": "ok",
		"sessions": 0,
		"modified": 1574002321.0,
		"created": 1574002321.0
	},
	"receipt": {
		"estimated_renewal": 1574607109.0,
		"renewal_state": true,
		"timestamp": 1574002315.0,
		"expires": 4969683136.0,
		"renewal_info": [{
			"auto_renew_status": "1",
			"auto_renew_product_id": "onlinebackup_h_1y",
			"product_id": "onlinebackup_h_1y",
			"original_transaction_id": "590000448453811"
		}],
		"valid": true
	},
	"uid": "VTo1MTk1NzI0Nzk0NjI2MDQ4",
	"created": 1574002316.0
};
$done({body: JSON.stringify(obj)});

//
