var obj = JSON.parse($response.body);

obj.data.purchased=
{
			"pay_inapp": false,
			"time_purchased": 0,
			"time_activated": 1571981288,
			"time_expire": 0,
			"product_list": [],
			"is_active": true,
			"is_free": false
		};
obj.data.show_learn_to_spell=true;
$done({body: JSON.stringify(obj)});

// Descriptionsp
