  
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
				"price": 9.95,
				"currency": "EUR",
				"symbol": "%E2%82%AC"
			}, {
				"price": 12.95,
				"currency": "USD",
				"symbol": "%24"
			}, {
				"price": 7.95,
				"currency": "GBP",
				"symbol": "%C2%A3"
			}],
			"subscriptionId": "HSSUBS_B2CSUBSCRIBER"
		}
	}, {
		"type": "vouchers",
		"id": "HSVCHR_A694L22PN4LCU3FJ",
		"attributes": {
			"id": "HSVCHR_A694L22PN4LCU3FJ",
			"name": "Annual (14 day trial)",
			"description": "An iOS monthly subscription with a 14 day free trial",
			"code": "IOSIAP_FT_14D_ANNUAL",
			"numMonths": 1000,
			"isGift": true,
			"voucherId": "HSVCHR_A694L22PN4LCU3FJ",
			"platform": "iap"
		}
	}],
	"data": {
		"type": "userSubscriptions",
		"id": "HSUSUB_E4WLBJPAPZI8YY81",
		"attributes": {
			"id": "HSUSUB_E4WLBJPAPZI8YY81",
			"userSubscriptionId": "HSUSUB_E4WLBJPAPZI8YY81",
			"startDate": "2019-11-17T15:45:32.0+0000",
			"endDate": "2119-11-17T15:45:32.0+0000",
			"status": "ACTIVE",
			"paymentSchedule": "EVERGREEN",
			"nextRenewalDate": "2119-11-17T15:45:32.0+0000",
			"inFinalPeriod": false,
			"inLast30Days": true,
			"isLifetime": true,
			"cancelled": false,
			"freeTrialEndDate": "2119-12-01T15:45:32.0+0000",
			"iapOriginalTransactionId": "590000448468341",
			"subscriptionDetails": {
				"platform": "APPLE",
				"term": 12,
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
					"id": "HSVCHR_A694L22PN4LCU3FJ"
				}
			}
		}
	}
};
$done({body: JSON.stringify(obj)});

//
