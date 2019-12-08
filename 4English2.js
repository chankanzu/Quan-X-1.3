var obj = JSON.parse($response.body);
obj={
	"code": 200
};

$done({body: JSON.stringify(obj)});
