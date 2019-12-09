//https://www.lumosity.com/api/v2/insights/game_result_stats?end_date=2019-12-09
var obj = JSON.parse($response.body);

obj= {
	"data": [{
		"type": "game_result_stat",
		"id": "2019-12-09",
		"attributes": {
			"gameplays": 3
		}
	}],
	"meta": {
		"start_date": "2019-11-09",
		"end_date": "2119-12-09"
	}
};

$done({body: JSON.stringify(obj)});

//
