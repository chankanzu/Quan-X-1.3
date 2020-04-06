var body = $response.body;
let obj = JSON.parse(body);
obj["data"]["user_infor"]["user"]["user_vip_package"]["name"] = "\u001dGói VIP thường";
obj["data"]["user_infor"]["user"]["user_vip_package"]["package_type"] = "free_trial";
obj["data"]["user_infor"]["user"]["user_vip_package"]["remaining_date"] = 365;
obj["data"]["user_infor"]["user"]["user_vip_package"]["start_date"] = "05-04-2020";
obj["data"]["user_infor"]["user"]["user_vip_package"]["end_date"] = "05-05-2120";
$done({body:JSON.stringify(obj)});
