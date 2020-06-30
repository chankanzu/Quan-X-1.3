//https://www.frenchpod101.com/learningcenter/json/newest2
//https://www.frenchpod101.com/learningcenter/json/login
//https://www.frenchpod101.com/learningcenter/json/categories
//https://www.frenchpod101.com/learningcenter/json/mycompleted2
let obj = JSON.parse($response.body);
  obj["data"]["Subscription"]["subscription"]= "free";
  obj["data"]["Subscription"]["status"]= "active";
  obj["data"]["Subscription"]["hasBasicAccess"]= true;
  obj["data"]["Subscription"]["hasPremiumAccess"]= true;
  obj["data"]["Subscription"]["renewdate"]= "2099-07-08T00:00:00+09:00";  
  obj["data"]["Subscription"]["hasPremiumAccess"]= true;  
$done({body: JSON.stringify(obj)});
