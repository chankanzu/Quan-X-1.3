let headers = $response.headers;
   let status = $response.statusCode;
    let obj = JSON.parse($response.body);

    {
    obj = {"subscription_apple":{"subscription_exp":3042979200,"product_id":"y"},"subscription_google":null};
}
    status = 200;
    delete headers['X-FaceApp-ErrorCode'];

$done({body: JSON.stringify(obj),headers,status});

Set-cookie
itspod=16;Version=1;Path=/;Domain=.apple.com;Expires=Mon, 06-Jan-2020 14:47:12 GMT;Max-Age=2678400
