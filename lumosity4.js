//https://www.lumosity.com/api/oauth/token
var obj = JSON.parse($response.body);

obj= {
	"uid": "2550460024967540",
	"expires_at": "9994092211200.000000",
	"grant_type": "password",
	"auth_type": "facebook",
	"visit": {},
	"password": "",
	"first_name": "Jun",
	"username": "",
	"client_id": "azftighyce2jg8rhpufkq8prm",
	"client_secret": "1wrkk3qisafkpk8wopcpgoc8o",
	"last_name": "Bố",
	"email": "svcntnk42a1@gmail.com",
	"access_token": "EAAAABnZBA9HwBANYdFePTeuRcqTlCcOc2wgDU6DoDZAqLzu4TBKTFqFC9JhB4BNXRSo5ibv2wqkoD5ZBK9raJvQ74AzsjfU6xxyPi7nZCONgBxUDgDwUCTouuLbpTbFZBmGkZA02ZAIhoXQuYX7nnpIGbjOpNwrhWaUG8GjJDovZBCL5uotzxRor6lZCcZBHEZAWwhpzDbYZAqgfnu97Rdm5EFWFYa5bk0rBJX45odrwKknhiwZDZD"
};

$done({body: JSON.stringify(obj)});

//
