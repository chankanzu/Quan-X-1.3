//http://bbdd2101-default-recorders-4916-415735771.us-west-2.elb.amazonaws.com/pay/checkAppleSubscribeReceipt*
let obj = JSON.parse($response.body)
obj.result.expiresDateMs = 1900480559000;
obj.result.productId = "recorder_1_year";
$done({body:JSON.stringify(obj)})
