var obj = JSON.parse($response.body);
obj["deviceInfo"]["isActive"]= true;
obj["deviceInfo"]["isPushEnabled"]= true;
$done({body: JSON.stringify(obj)});

//