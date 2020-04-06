var obj = JSON.parse($response.body);

obj= {
	"currency": "USD",
	"subscription_id": "590000502411615",
	"purchased": "2020-04-05T03:55:26.000Z",
	"expires_ms": 1988650926635,
	"expires": "2120-05-05T03:55:26.635Z",
	"store_key": "apple",
	"created": "2020-04-05T03:55:32.123Z",
	"app_version": "21.2.0",
	"dated_receipt_id": "1586058926000_590000502411615",
	"receipt_id": "590000502411615",
	"product_id": "com.pumkin.funchinese.subscription_one_month",
	"app_id": "com.pumkin.funchinese",
	"is_free_trial": true,
	"test": false,
	"app_shortcode": "FC",
	"price": 0,
	"purchased_ms": 1586058926000,
	"type": "initial",
	"Items": [{
		"latest_expired_receipt_info": {
			"original_transaction_id": "590000502411615",
			"transaction_id": "590000502411615",
			"product_id": "com.pumkin.funchinese.subscription_one_month",
			"expires_date_formatted": "2120-05-05T03:55:26.635Z",
			"purchaseToken": "590000502411615",
			"expirationTime": 1988650926635
		}
	}]
};

$done({body: JSON.stringify(obj)});

// Descriptions
//https://subs.studycat.net/1/getpurchasedata/590000502411615?app_version=21.2.0
