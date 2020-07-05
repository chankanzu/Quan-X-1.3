let obj = JSON.parse($response.body)
obj.data.expiredTime = "4086356907000";
obj.data.pro = true;
$done({body:JSON.stringify(obj)})
//https://vocabinnews.com/v1/users/me/pro
