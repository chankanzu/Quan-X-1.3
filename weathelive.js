//https://subs.platforms.team/apple/verifyTransaction
var obj = JSON.parse($response.body);

obj= {
	"error": 0,
	"data": {
		"is_valid": true,
		"may_expire": false,
		"is_offer_eligible": true,
		"in_app": {
			"com.apalonapps.wlf.7d_3dt_sub00004": {
				"is_valid": true,
				"cancelled": false,
				"may_expire": true,
				"is_trial": true,
				"is_intro": false,
				"transaction_id": "590000455680963",
				"purchase_date_ms": "1575898137000",
				"expired": false,
				"expires_date_ms": "4096412384000",
				"remaining_time_ms": "259109000"
			}
		},
		"consumable_inapp": [],
		"hash": "f47a591a55f11af56fd92c36990f7714"
	}
};

$done({body: JSON.stringify(obj)});

//
