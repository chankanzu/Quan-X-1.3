var obj = JSON.parse($response.body);

obj= {
	"mobileProfileSpecVersion": "1.0",
	"mobileProfile": {
		"id": "af0e1db9-8671-4ebd-9507-2a1d1c2fcd13",
		"previousProfileId": "314505ad-37a1-4a8e-9fa6-f152a791229e",
		"serverId": "lcs-mobile-cops",
		"profileStatus": "PROFILE_AVAILABLE",
		"appLicenseMode": "FREEMIUM",
		"legacyProfile": "{\"licenseId\":\"5AF03ADD2CA7D32F701A\",\"licenseType\":3,\"licenseVersion\":\"1.0\",\"effectiveEndTimestamp\":1575532799000,\"graceTime\":432000000,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":204,\"serialKey\":\"994307883767766786548728\",\"clearSerialKey\":\"12044064152283799162\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":2044017,\"customerId\":0,\"deliveryMethod\":3,\"pc\":true,\"rb\":false}}",
		"relationshipProfile": "[{\"profileGenerationTimestamp\":1575386802242,\"licenseId\":\"5AF03ADD2CA7D32F701A\",\"licenseExpiryTimestamp\":1975964799000,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1975359999000,\"warningInterval\":0}}]",
		"userProfile": "{\"userId\":\"7D80726747EDA7D9992015C3@AdobeID\",\"firstName\":\"TranKanh\",\"lastName\":\"Du\",\"email\":\"svcntnk42a1@gmail.com\",\"countryCode\":\"SG\",\"displayName\":\"TranKanh%20Du\",\"accountType\":\"type1\"}",
		"additionalLegacyProfiles": "{}",
		"appProfile": "{}",
		"controlProfile": {
			"cacheRefreshControl": {
				"appRefreshInterval": 84960000
			}
		}
	},
	"workflow": null
};

$done({body: JSON.stringify(obj)});

//
