  
var obj = JSON.parse($response.body);

obj= {
	"links": {
		"self": "/subscription/user-subscriptions/{userSubscriptionId}"
	},
	"included": [{
		"type": "subscriptions",
		"id": "HSSUBS_B2CSUBSCRIBER",
		"attributes": {
			"id": "HSSUBS_B2CSUBSCRIBER",
			"name": "2 - Subscriber",
			"prices": [{
				"price": 12.95,
				"currency": "USD",
				"symbol": "%24"
			}, {
				"price": 9.95,
				"currency": "EUR",
				"symbol": "%E2%82%AC"
			}, {
				"price": 7.95,
				"currency": "GBP",
				"symbol": "%C2%A3"
			}],
			"subscriptionId": "HSSUBS_B2CSUBSCRIBER"
		}
	}, {
		"type": "vouchers",
		"id": "HSVCHR_X8624A777OQO6TRW",
		"attributes": {
			"id": "HSVCHR_X8624A777OQO6TRW",
			"name": "IOSIAPLIFETIME2",
			"description": "IOSIAPLIFETIME2",
			"code": "IOSIAPLIFETIME2",
			"numMonths": 9999,
			"isGift": false,
			"voucherId": "HSVCHR_X8624A777OQO6TRW",
			"platform": "iap"
		}
	}],
	"data": {
		"type": "userSubscriptions",
		"id": "HSUSUB_WJ82HZULH5OGL6XS",
		"attributes": {
			"id": "HSUSUB_WJ82HZULH5OGL6XS",
			"userSubscriptionId": "HSUSUB_WJ82HZULH5OGL6XS",
			"startDate": "2018-12-06T03:31:15.0+0000",
			"endDate": "2852-03-06T03:31:15.0+0000",
			"status": "ACTIVE",
			"paymentSchedule": "EVERGREEN",
			"nextRenewalDate": "2852-03-06T03:31:15.0+0000",
			"inFinalPeriod": false,
			"inLast30Days": false,
			"isLifetime": true,
			"cancelled": false,
			"iapOriginalTransactionId": "70000542534457",
			"subscriptionDetails": {
				"platform": "APPLE",
				"term": 9999,
				"version": "V2",
				"planAffiliation": null,
				"businessModel": "B2C",
				"membership": "PRIMARY",
				"planCategory": null
			}
		},
		"relationships": {
			"subscription": {
				"data": {
					"type": "subscriptions",
					"id": "HSSUBS_B2CSUBSCRIBER"
				}
			},
			"voucher": {
				"data": {
					"type": "vouchers",
					"id": "HSVCHR_X8624A777OQO6TRW"
				}
			}
		}
	}
};
$done({body: JSON.stringify(obj)});

//
