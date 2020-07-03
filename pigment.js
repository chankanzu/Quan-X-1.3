var obj = JSON.parse($response.body);

obj= {
	"request_date": "2020-07-02T15:54:38Z",
	"request_date_ms": 1593705278859,
	"subscriber": {
		"entitlements": {
			"premium_access": {
				"expires_date": "2999-07-09T13:05:01Z",
				"product_identifier": "com.pixite.pigment.1weekM",
				"purchase_date": "2020-07-02T13:05:01Z"
			}
		},
		"first_seen": "2020-06-26T14:52:09Z",
		"last_seen": "2020-07-02T15:54:22Z",
		"management_url": "itms-apps://apps.apple.com/account/subscriptions",
		"non_subscriptions": {},
		"original_app_user_id": "AAB84B2C-00C2-409A-BDBA-223585EB3253",
		"original_application_version": "7",
		"original_purchase_date": "2020-06-06T00:42:06Z",
		"other_purchases": {},
		"subscriptions": {
			"com.pixite.pigment.1yearM": {
				"billing_issues_detected_at": null,
				"expires_date": "2999-07-09T13:05:01Z",
				"is_sandbox": false,
				"original_purchase_date": "2020-07-02T13:05:01Z",
				"period_type": "trial",
				"purchase_date": "2020-07-02T13:05:01Z",
				"store": "app_store",
				"unsubscribe_detected_at": null
			}
		}
	}
};

$done({body: JSON.stringify(obj)});

//