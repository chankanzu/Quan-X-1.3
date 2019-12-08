var obj = JSON.parse($response.body);
obj={
	"account": {
		"info": {
			"hasError": false,
			"error": null,
			"name": "Khanh Du Tran",
			"email": "svcntnk42a1@gmail.com"
		},
		"status": {
			"hasError": false,
			"error": null,
			"signedIn": true,
			"pro": true,
			"proForStudents": true,
			"proForEducators": true,
			"proLevel": 1
		},
		"persona": {
			"classification": "Educator",
			"source": null,
			"resourceId": {
				"userId": 8982271,
				"productId": 9
			}
		},
		"permissions": {
			"hasError": false,
			"error": null,
			"features": {
				"practiceSheets": {
					"units": null,
					"value": false
				},
				"embeddablePods": {
					"units": null,
					"value": false
				},
				"webApps": {
					"units": null,
					"value": ""
				},
				"fileUpload": {
					"units": "MB",
					"value": 0
				},
				"imageInput": {
					"units": "MB",
					"value": 0
				},
				"showSteps": {
					"units": null,
					"value": false
				},
				"specialCharacterKeyboards": {
					"units": null,
					"value": false
				},
				"pdfDownload": {
					"units": null,
					"value": false
				},
				"copyablePlaintext": {
					"units": null,
					"value": false
				},
				"cdfDownload": {
					"units": null,
					"value": false
				},
				"dataInput": {
					"units": null,
					"value": false
				},
				"cdfInteractivePods": {
					"units": null,
					"value": false
				},
				"customizeGraphicsPods": {
					"units": null,
					"value": false
				},
				"storeDownloadedData": {
					"units": null,
					"value": false
				},
				"longerTimeouts": {
					"units": "seconds",
					"value": 0
				},
				"zoomSubpods": {
					"units": null,
					"value": false
				},
				"downloadPodData": {
					"units": null,
					"value": false
				},
				"removeAds": {
					"units": null,
					"value": false
				},
				"emailProductSupport": {
					"units": null,
					"value": false
				},
				"saveSubpodAsImage": {
					"units": null,
					"value": false
				}
			}
		},
		"subscriptions": {
			"hasError": false,
			"error": null,
			"hasSubscriptions": true,
			"primarySubscription": {
				"subscriptionId": 3745930,
				"userId": 8982271,
				"planId": 1106,
				"startDate": "2019-10-11",
				"nextBillingDate": null,
				"finalAccessDate": null,
				"status": "ACTIVE",
				"paymentType": "NONE",
				"monthStart": "2019-10-11",
				"monthEnd": "2119-11-11",
				"nda": false,
				"userUuid": "122ac2b5-f072-4a71-affa-20fec88ac6f9",
				"plan": {
					"planId": 1106,
					"name": "Basic",
					"description": "Wolfram Alpha Free Subscription",
					"billingPeriod": "NONE",
					"planType": "BASIC",
					"productId": 9,
					"canUpgrade": false,
					"product": {
						"productId": 9,
						"name": "Wolfram|Alpha",
						"type": "SUBSCRIPTION",
						"prettyName": "wa",
						"productReady": true,
						"contactUsUrl": "https://www.wolframalpha.com/contact.html",
						"productUrl": "https://www.wolframalpha.com/",
						"productHost": "www.wolframalpha.com",
						"productPricingUrl": "https://www.wolframalpha.com/pro",
						"productReleased": true,
						"learnAboutUrl": "https://products.wolframalpha.com/"
					}
				}
			},
			"nextSubscription": null,
			"nextPaidSubscription": null,
			"allSubscriptions": [{
				"subscriptionId": 3745930,
				"userId": 8982271,
				"planId": 1106,
				"startDate": "2019-10-11",
				"nextBillingDate": null,
				"finalAccessDate": null,
				"status": "ACTIVE",
				"paymentType": "NONE",
				"monthStart": "2019-10-11",
				"monthEnd": "2119-11-11",
				"nda": false,
				"userUuid": "122ac2b5-f072-4a71-affa-20fec88ac6f9",
				"plan": {
					"planId": 1106,
					"name": "Basic",
					"description": "Wolfram Alpha Free Subscription",
					"billingPeriod": "NONE",
					"planType": "BASIC",
					"productId": 9,
					"canUpgrade": false,
					"product": {
						"productId": 9,
						"name": "Wolfram|Alpha",
						"type": "SUBSCRIPTION",
						"prettyName": "wa",
						"productReady": true,
						"contactUsUrl": "https://www.wolframalpha.com/contact.html",
						"productUrl": "https://www.wolframalpha.com/",
						"productHost": "www.wolframalpha.com",
						"productPricingUrl": "https://www.wolframalpha.com/pro",
						"productReleased": true,
						"learnAboutUrl": "https://products.wolframalpha.com/"
					}
				}
			}],
			"billingDetails": null
		},
		"preferences": {
			"hasError": false,
			"error": null,
			"id": 6506998,
			"userId": 8982271,
			"createdDate": 1570808584000,
			"updatedDate": 1570808584000,
			"updatedBy": 0,
			"location": "Automatic",
			"country": "Automatic",
			"timezone": "Automatic",
			"currency": "Automatic",
			"dateFormat": "Automatic",
			"unitFormat": 0,
			"queryHistory": false,
			"querySuggestion": false,
			"keyboard": 0,
			"dataFormat": "Excel 97-2004",
			"imageFormat2d": "gif",
			"imageFormat3d": "format 1",
			"soundFormat": "mp3",
			"resultsWidth": 4,
			"fontSize": 0,
			"contrast": 0,
			"homepageBackground": "blue-circles",
			"homepageHints": 0,
			"homepageHistory": false,
			"homepageFavorites": false,
			"homepageData": false,
			"homepageShortcuts": false
		},
		"links": {
			"facebook": null
		},
		"hasError": false,
		"error": null,
		"profilingSet": null
	},
	"hasError": false,
	"error": null,
	"profilingSet": null
};

$done({body: JSON.stringify(obj)});
