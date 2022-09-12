var obj = JSON.parse($response.body);

obj.data.purchased=
{
			"pay_inapp": false,
			"time_purchased": false,
			"time_activated": 1571981288,
			"time_expire": 0,
			"product_list": [],
			"is_active": true,
			"is_free": false,
			"is_purchased": true
		};
obj.data.show_learn_to_spell=true;
$done({body: JSON.stringify(obj)});

// Descriptionsp
