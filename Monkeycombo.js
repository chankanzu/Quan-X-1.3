var obj = JSON.parse($response.body);

obj.data.purchased=
{
      "product_list": [
      ],
      "is_active": true,
      "time_expire": 1900652191,
      "pay_inapp": true,
      "is_free": false
    };
$done({body: JSON.stringify(obj)});

// Descriptionsp
