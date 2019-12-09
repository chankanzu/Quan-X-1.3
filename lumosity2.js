var obj = JSON.parse($response.body);

obj= {
	"user": {
		"id": 100722343,
		"unique_name": null,
		"email_address": "svcntnk42a1@gmail.com",
		"url_slug": null,
		"updated_at": "2019-02-14T14:53:54.000Z",
		"first_name": "Jun",
		"last_name": "Bố",
		"date_of_birth": "1988-01-02",
		"gender": "m",
		"education_level": 4,
		"training_priorities": ["Speed", "Problem Solving", "Flexibility", "Attention", "Memory"],
		"active_until": "2119-12-23",
		"account_state": "subscription",
		"bpt_test_id": null,
		"is_recurring": true,
		"roles": [],
		"crittercism_id": "Vm84bTEzU2cxemUxenFGWi9NWUNTdz09Cg",
		"leanplum_id": "a3pqRXV4UTR2SDNMWFJZOXVrT1M2Zz09Cg",
		"crashlytics_id": "NmtGdzVuWHAvbndWc0J5RHJoVU1vQT09Cg",
		"time_zone_name": "Asia/Tokyo",
		"occupation": 0,
		"small_thumbnail_url": "/lumosity/production/defaults/avatar/small-a11cde1610364a080fc0f0177aea23d8c7ee9f3467b6aa17e38e64f1f2244248.png",
		"medium_thumbnail_url": "/lumosity/production/defaults/avatar/medium-4fbb965d7f169bc61696cfecd2e9a00ff39cdd87f6b12d08ee6f337e81b9a28c.png",
		"large_thumbnail_url": "/lumosity/production/defaults/avatar/large-a4ca864ce452f29ffd622279d125b83d1a407eef01c015826e8c8ffef8c1f604.png",
		"assignment_id": "6ac533b6-bc7c-49ba-b67b-199fdbc8a68e",
		"referral": "1151",
		"referrals": ["4040", "1151"],
		"underage_at_signup": false,
		"ftc_notification": false,
		"brain_trainer_active_until": null,
		"has_facebook_identity": true,
		"split_test_assignments": [],
		"fit_test_completed": true,
		"country_code": "JP",
		"billing_flow": "native",
		"is_resurrected": false,
		"is_in_free_trial": true,
		"is_in_no_cc_trial": false,
		"had_mobile_free_trial": true,
		"created_at": "2019-02-14T14:53:54+00:00"
	}
};

$done({body: JSON.stringify(obj)});

//
