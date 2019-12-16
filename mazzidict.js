//https://api.mazii.net/api/init-login
  
var body = $response.body;
let obj = JSON.parse(body);
obj.result["premium_date"] = "2018-10-26 14:45:15",;
obj.result["premium_expired_date"] = "2122-10-25 14:45:15",;
obj.result["lifetime"] = 1;
$done({body:JSON.stringify(obj)});

