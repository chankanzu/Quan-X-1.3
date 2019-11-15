var obj = JSON.parse($response.body);

obj= {
	"status": "ok",
	"info": {
		"id": 10855198,
		"anonymous_id": "03cc9fa0-c17f-11e9-afc8-355405cd2b21",
		"email": "svcntnk42a1@gmail.com",
		"cohort": "R",
		"country": "vn",
		"provider": "facebook",
		"channel": "organic_store",
		"customer": true,
		"created_at": "2019-08-18T06:13:16.224Z",
		"referral_user_id": null,
		"promotion_campaign": "1",
		"subscriptions": [{
			"id": 810617,
			"status": "trial",
			"state": "active_trial",
			"product": "unlimited",
			"platform": "apple",
			"starts_at": 1573059883,
			"ends_at": 4099821292‬,
			"plan_id": "lk.ios.s1m.t1m.p15.v1",
			"duration_unit": "months",
			"duration_value": 1,
			"auto_renew_status": true
		}, {
			"id": 741222,
			"status": "paided",
			"state": "expired_trial",
			"product": "unlimited",
			"platform": "apple",
			"starts_at": 1567004736,
			"ends_at": 4099821292‬,
			"plan_id": "lk.ios.s1m.t1m.p15.v1",
			"duration_unit": "months",
			"duration_value": 1,
			"auto_renew_status": true
		}],
				
	},
	"auth": {
		"token": "b2c0af05-40a5-4e97-a339-7b71974ecac5"
	},
	"features": {
		"require_privacy_policy_acceptance": false,
		"display_newsletter_opt_in": false,
		"notifications_extended_body": true,
		"enable_community": true,
		"age_based_covers": true
	}
      };

$done({body: JSON.stringify(obj)});
