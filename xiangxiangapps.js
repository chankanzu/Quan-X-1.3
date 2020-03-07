var obj = JSON.parse($response.body);
obj={
	"retcode": 1000,
	"errmsg": "",
	"data": {
		"user": {
			"uid": 0,
			"uniqkey": "0",
			"username": null,
			"nickname": null,
			"mobi": null,
			"email": null,
			"sysgid": null,
			"gid": null,
			"gids": null,
			"gicon": "",
			"isvip": 1,
			"regtime": "1970-01-01 08:00:00",
			"gender": null,
			"avatar": null,
			"avatar_url": "https:\/\/pic.1024av.cc\/sysavatar\/noavatar.png",
			"newmsg": null,
			"goldcoin": 100000,
			"duetime": "",
			"dueday": ""
		},
		"uinfo": {
			"goldcoin": "10000",
			"play_daily_remainders": 1000,
			"down_daily_remainders": 1000,
			"curr_group": null,
			"next_group": null,
			"next_upgrade_need": 0,
			"minivod_play_daily_remainders": 200,
			"minivod_down_daily_remainders": 300
		},
		"signed": 1
	}
};
$done({body: JSON.stringify(obj)});
