var obj = JSON.parse($response.body);

obj= {
	"status": true,
	"purchased": true,
	"sync": true,
	"lm": true,
	"pen": true,
};

$done({body: JSON.stringify(obj)});

//
