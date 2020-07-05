//https://vocabinnews.com/v1/users/me/pro$
let obj = JSON.parse($response.body)
obj.data.expiredTime = "4086356907000";
obj.data.pro = true;
obj.data.showOxford = true;
obj.data.shortUserId = "000286";
$done({body:JSON.stringify(obj)})

