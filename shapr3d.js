var obj = JSON.parse($response.body);
obj["subscriptionType"]= "edu";
obj["subscriptionExpires"]= "2099-05-22T09:14:44.394Z";
obj["hasEmail"]= true;
$done({body: JSON.stringify(obj)});

//
