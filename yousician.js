//https://www.leanplum.com/api
  
var obj = JSON.parse($response.body);

obj= {
	"response": [{
		"success": true
	}, {
		"success": true
	}, {
		"success": true
	}, {
		"success": true
	}, {
		"success": true
	}, {
		"success": true
	}, {
		"success": true
	}, {
		"success": true
	}, {
		"success": true
	}, {
		"success": true
	}, {
		"success": true
	}, {
		"regions": {},
		"fileAttributes": {},
		"success": true,
		"messages": {},
		"vars": {
			"Engagement": {
				"Home Row Recommended For You": 1
			},
			"Piano": {
				"Touch Keyboard Enabled": true
			},
			"RevenueWeb": {
				"DashboardSubscribeBanner": "image",
				"CheckoutForm": "form"
			},
			"Education": {
				"Piano Calibration In MGPM": true
			},
			"Discovery": {
				"Home Row Order Mode": 2,
				"Max Items On Home Row": 7,
				"See All Licensed Songs": true,
				"Recommended Exercise Mode": 1
			},
			"Misc": {
				"Attribution Question": true
			},
			"RnD": {
				"Use Native Rating Prompt": true,
				"Min Session Id For Asking Rating": 0,
				"Min Daily Time For Asking Rating": 240,
				"Hours Since Signup Before Asking Rating": 24
			},
			"Revenue": {
				"Adyen Auto Rescue": true,
				"PremiumPlus Instruments": "guitar, bass, ukulele, voice, piano",
				"Allow iOS Resubscriptions": true,
				"Weekly Plans Instruments": "guitar, bass, voice, ukulele"
			},
			"Voice": {
				"Timing Feedback Enabled": true,
				"Onboarding Skill Selection": true,
				"Syllabus Version": "main",
				"Ads In Last Song Of Mission": true,
				"Player Can Fail": true
			},
			"RevenueAds": {
				"MainAd": {
					"Billing Price Format ID": 3,
					"Page Close Method ID": 3
				},
				"Gifting": {
					"Gifting Ad Button": "GIVE GIFT",
					"Show Gifting Announcement": false,
					"Gifting Url": "gift",
					"Show Give Gift Button": false,
					"Gifting Ad Headline": "",
					"Gifting Ad Body": "Give your friends and loved ones something meaningful this holiday season.\nGet them started on their musical journey with Yousician."
				}
			},
			"Onboarding": {
				"Use Old Tuner": true
			}
		},
		"interfaceRules": [],
		"variants": [{
			"id": 6016842697932800
		}, {
			"id": 6334859776491520
		}, {
			"id": 5965859292839936
		}, {
			"id": 5139764282785792
		}, {
			"id": 6509994410115072
		}, {
			"id": 6316219514093568
		}],
		"interfaceEvents": [],
		"syncNewsfeed": false
	}]	
	
  };

$done({body: JSON.stringify(obj)});

//
