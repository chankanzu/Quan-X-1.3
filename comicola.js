let obj = JSON.parse($response.body);
  obj["data"]["coin"]= 99999;
  obj["data"]["vip_level"]= 1;
  obj["data"]["vip_expired"]= 1991362931;
  obj["data"]["has_bought"]= true;
$done({body: JSON.stringify(obj)});
