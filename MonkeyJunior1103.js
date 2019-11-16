var obj = JSON.parse($response.body);

obj= {
	"status": "success",
	"message": "Th\u00e0nh c\u00f4ng",
	"code": 200,
	"data": {
		"user_id": 1039489,
		"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAzOTQ4OSwibmFtZSI6IiIsInBob25lIjoiMDk4NDYyMDk4NSIsImVtYWlsIjoiIiwibWF4X3Byb2ZpbGUiOjMsIm1heF9kZXZpY2Vfb25fYWN0aXZlIjoxMCwibWF4X2RldmljZV90b3RhbCI6MTV9.TwhR_UupoD4vcKWIV0HPPxr5ita1620oJXnch3z3DUE",
		"is_on_board": false
	}
};

$done({body: JSON.stringify(obj)});

// Descriptions
