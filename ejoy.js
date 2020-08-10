let obj = JSON.parse($response.body);
obj["data"]["checkSub"]["pro"]=true;
obj["data"]["checkSub"]["expire"]=1997916480079;
obj["data"]["getCoinBalance"]=199999;
obj["data"]["login"]["expire"]="2592000";
$done({body: JSON.stringify(obj)});

//chankanzu
