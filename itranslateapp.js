
var obj = JSON.parse($response.body);

obj= {
	"licenses": [{
		"is_trial_period": true,
		"product_id": "com.itranslate.pro.monthly",
		"original_transaction_id": "590000457497610",
		"expires_date_ms": 4081386904000,
		"bundle_id": "com.outerspaceapps.itranslate",
		"transaction_id": "590000457497610"
	}, {
		"is_trial_period": true,
		"product_id": "com.itranslate.pro.monthly",
		"original_transaction_id": "590000457497610",
		"expires_date_ms": 4081386904000,
		"bundle_id": "com.outerspaceapps.itranslate",
		"transaction_id": "590000457497610"
	}]
};

$done({body: JSON.stringify(obj)});

//
