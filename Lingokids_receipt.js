//https://p59-buy.itunes.apple.com/commerce/account/subscriptions/detail?context=deeplink&prevpage=managesubscriptions&subscriptionId=590000016047020&version=2.0


var obj = JSON.parse($response.body);

obj= {
	"userInfo": {},
	"status": 0,
	"subscription": {
		"isInFreeTrialPeriod": true,
		"isAutoRenewEnabled": false,
		"currentPrice": "349.000đ",
		"expirationTimestamp": 1575651883000,
		"coverArt": {
			"width": 1024,
			"isTemplateUrl": true,
			"url": "https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/37/9d/34/379d3432-3803-a563-b8f3-1587652d6740/AppIcon-0-1x_U007emarketing-0-0-85-220-0-7.png/{w}x{h}{c}-{q}.{f}",
			"platform": "iOS",
			"height": 1024
		},
		"type": "IAP",
		"appAdamId": 1002043426,
		"showFamilyName": true,
		"renewalOptions": [{
			"buyParams": "offerName=lk.ios.s1m.t1m.p15.v1&quantity=1&appExtVrsId=833111620&buySubscription=true&appAdamId=1002043426&price=239000000&pg=borat_vnd&salableAdamId=1482278812&pricingParameters=STDQ&bvrs=1408&bid=es.monkimun.lingokids&subscriptionId=590000016047020&productType=A",
			"period": "P1M",
			"priceForBuy": "239000000",
			"price": "239.000đ",
			"displayName": "Special Offer",
			"isSalableSelected": false,
			"rank": 2,
			"adamId": "1482278812"
		}, {
			"buyParams": "offerName=lk.ios.s1m.t1m.p15.v1&quantity=1&appExtVrsId=833111620&buySubscription=true&appAdamId=1002043426&price=349000000&pg=borat_vnd&salableAdamId=1464133595&pricingParameters=STDQ&bvrs=1408&bid=es.monkimun.lingokids&subscriptionId=590000016047020&productType=A",
			"period": "P1M",
			"priceForBuy": "349000000",
			"price": "349.000đ",
			"displayName": "Unlimited Membership",
			"isSalableSelected": false,
			"rank": 1,
			"adamId": "1464133595"
		}],
		"familyName": "Full Access",
		"isDiscontinued": false,
		"subscriptionId": "590000016047020",
		"publicationName": "Lingokids - English For Kids",
		"latestPlan": {
			"isDiscounted": false,
			"period": "P1M",
			"trialPeriod": "P1M",
			"displayName": "Unlimited Membership",
			"salableAdamId": "1464133595",
			"trialOfferPeriod": "P1M",
			"paidPrice": "349.000đ"
		},
		"status": "Active",
		"expirationDate": "06 Dec 2119"
	}
};

$done({body: JSON.stringify(obj)});

//
