/**
 * @fileoverview Example of HTTP rewrite of request header.
 *
 * @supported Quantumult X (v1.0.5-build188)
 *
 * [rewrite_local]
 * ^http://example\.com/resource9/ url script-request-header sample-rewrite-request-header.js
 */

// $request.scheme, $request.method, $request.url, $request.path, $request.headers

var modifiedHeaders = $request.headers;
//modifiedHeaders['Key'] = 'whatever';

var modifiedPath = '/subscription/user-subscriptions?userId=HSUSER_NRU076IXTZI8C5K';

//$done({path: modifiedPath, headers : modifiedHeaders});
$done({path : modifiedPath});
// $done({}); // Not changed.
