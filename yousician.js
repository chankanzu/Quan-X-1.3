//https://www.leanplum.com/api
  
var obj = JSON.parse($response.body);

obj= {
	"response": [{
		"success": true
	}, {
		"success": true
	}, {
		"success": true
	}, {
		"success": true
	}]
	
  };

$done({body: JSON.stringify(obj)});

//
