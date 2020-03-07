let obj = JSON.parse($response.body);
  obj["data"]["dayrows"]["limit_free"] = 0;
  obj["data"]["dayrows"]["isvip"] = 0;
  obj["data"]["dayrows"]["islimit"] = 0;
  obj["data"]["dayrows"]["islimitv3"] = 0;
  obj["data"]["dayrows"]["exclusive"] = 0;
$done({body: JSON.stringify(obj)});

