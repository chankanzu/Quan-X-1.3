var obj = JSON.parse($response.body);

obj= {
 "status": 1,
 "error": null,
 "data": {
  "id": "1266291",
  "username": null,
  "full_name": "Khánh Dư Trần",
  "password": null,
  "email": "chankanzu@gmail.com",
  "about": null,
  "avatar": "https://lh5.googleusercontent.com/-wc5KNPnRbZs/AAAAAAAAAAI/AAAAAAAAAAA/ACevoQNVeUW6OYCZDJ1TcWejvPafp95puQ/s96-c/photo.jpg",
  "status": "1",
  "update_time": null,
  "create_time": "2019-02-23 14:46:50",
  "address": null,
  "remember_token": null,
  "phone": null,
  "birthday": null,
  "role_id": null,
  "modify_time": null,
  "modify_by": null,
  "gender": null,
  "login_type": null,
  "is_connect": "0",
  "ip": null,
  "first_name": null,
  "last_name": null,
  "device_info": "7.4.4",
  "os_info": "iPhone 7 Plus",
  "coins": "256775",
  "country_code": null,
  "link_signal": [
   {
    "id": "1871457",
    "signal": "chankanzu@gmail.com",
    "type": "1",
    "user_id": "1266291",
    "acess_token": "1//0eJmWoN-WggtmCgYIARAAGA4SNwF-L9IrlrfWme7slWr5GFhPFMMZxb-IU46zMu-FGPSSQ1ObDCC_brFF_7Ce69pECZuMPrHCUJE",
    "sync_events": "1",
    "is_login": "1"
   }
  ]
 },
 "api_version": "1.0"
};

$done({body: JSON.stringify(obj)});

//
