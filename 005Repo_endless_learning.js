
var obj = JSON.parse($response.body);

obj= {
	"serverTimestamp": 1573392764372,
	"apiKeySecret": "HmVwoQ4JUMXVUEuOXyzYl4yLJn51TzWb6Nj+Cq8GW3dDnkqWe6gjvD9D2PnpNHSutN8vWzua03iEzI53R8Qavg=="
};

$done({body: JSON.stringify(obj)});

//
