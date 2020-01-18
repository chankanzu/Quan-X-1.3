var body = $response.body;
let obj = JSON.parse(body);
obj.result["premium_expiration"] = ["2220-01-17 18:47:48"];
obj.result["type"] ="premium",
obj.result["expiration"] = ["2220-01-18 16:56:22"],  
$done({body:JSON.stringify(obj)});
