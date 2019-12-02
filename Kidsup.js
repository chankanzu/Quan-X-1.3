//https://api.kidsup.net/verify
  
var obj = JSON.parse($response.body);

obj= {
	"response": {
		"status": true,
		"message": "Thiết bị phù hợp"
	}
};

$done({body: JSON.stringify(obj)});

//
