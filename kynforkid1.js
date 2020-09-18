var obj = JSON.parse($response.body);
obj= {
	"success": true,
	"data": {
		"access_token": "13060a78897ee79edacf817a0623bcc5a590e2b22d1e676490dd2dee8270fc23/v7xYBA6zJJz2WFaH4OWbfdFa24GD4qm2njavf260-NhHxdetLqzkkzXhlVh07vuv/MzY4MzAz",
		"signature": "2204cc495c25ade4875025eaaac37edeefb8d5ad190ccb23b547ae14552e9dee",
		"user_id": 368303,
		"name": "Quang Anh",
		"avatar": "/default/user/kid/avatar-01.png",
		"email": "quanganh@kynaforkids.vn",
		"phone_number": "0966066008",
		"is_confirmed": true,
		"params": {
			"notification_topic": "app_notification_topic_staging"
		},
		"is_bought_kyna_english_premium": true,
		"config": {
			"referral_enable": false,
			"phonic_enable": true,
			"referral_min_version": "1.2.4",
			"cdn_min_version": "1.2.4"
		},
		"children": [{
			"id": 368409,
			"name": "Jun",
			"avatar": "/default/user/kid/avatar-01.png",
			"birthday": 1441083313,
			"is_acc_premium": true,
			"is_expired": false,
			"expired_time_acc": -1,
			"has_booking": false
		}, {
			"id": 368447,
			"name": "Đông",
			"avatar": "/default/user/kid/avatar-01.png",
			"birthday": 1343798920,
			"is_acc_premium": true,
			"is_expired": false,
			"expired_time_acc": -1,
			"has_booking": false
		}]
	}
};

$done({body: JSON.stringify(obj)});


// Descriptions
