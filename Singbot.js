//https://api.revenuecat.com/v1/subscribers/505C9299-48B3-49EA-94CA-04D683A22703

var obj = JSON.parse($response.body);

obj= {

 "request_date": "2019-12-25T18:44:43Z",
 "request_date_ms": 1577299483002,
 "subscriber": {
  "entitlements":"singbot.annual_subscription",
  "first_seen": "2019-12-25T18:16:44Z",
  "non_subscriptions": {},
  "original_app_user_id": "505C9299-48B3-49EA-94CA-04D683A22703",
  "original_application_version": null,
  "original_purchase_date": 1577299483002,
  "other_purchases": {},
  "subscriptions": 1977299483002
 }
};

$done({body: JSON.stringify(obj)});

//
