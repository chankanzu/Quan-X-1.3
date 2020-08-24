var obj = JSON.parse($response.body);
obj={
	"request_date": "2020-08-24T06:43:27Z",
	"request_date_ms": 1598251407817,
	"subscriber": {
		"entitlements": {
			"Premium": {
				"expires_date": "2020-08-27T06:04:06Z",
				"product_identifier": "com.monkeytaps.vocabulary.premium.year",
				"purchase_date": "2020-08-24T06:04:06Z"
			}
		},
		"first_seen": "2020-08-24T06:03:45Z",
		"last_seen": "2020-08-24T06:03:45Z",
		"management_url": "itms-apps://apps.apple.com/account/subscriptions",
		"non_subscriptions": {},
		"original_app_user_id": "$RCAnonymousID:5fcd4c250473413d8da9000982a8058e",
		"original_application_version": "3.7.1",
		"original_purchase_date": "2020-08-24T05:58:31Z",
		"other_purchases": {},
		"subscriptions": {
			"com.monkeytaps.vocabulary.premium.year": {
				"billing_issues_detected_at": null,
				"expires_date": "2020-08-27T06:04:06Z",
				"is_sandbox": false,
				"original_purchase_date": "2020-08-24T06:04:06Z",
				"period_type": "trial",
				"purchase_date": "2020-08-24T06:04:06Z",
				"store": "app_store",
				"unsubscribe_detected_at": null
			}
		}
	}
};
$done({body: JSON.stringify(obj)});
