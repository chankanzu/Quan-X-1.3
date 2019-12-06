//https://p16-buy.itunes.apple.com/WebObjects/MZFastFinance.woa/wa/inAppCheckDownloadQueue
let headers = $response.headers;
   let status = $response.statusCode;
    let obj = JSON.parse($response.body);

    {
    obj = {"Expires":"Thu, 01 Jan 1970 00:00:00 GMT","Set-Cookie":{"Expires":"Mon, 06-Jan-2020 14:47:12 GMT"};
}
    status = 200;

$done({body: JSON.stringify(obj),headers,status});

//

