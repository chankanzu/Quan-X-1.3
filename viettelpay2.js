//https://vtpay9.viettel.vn/shake-2020/user/profile
var obj = JSON.parse($response.body);
obj= {
	"status": {
		"code": "00",
		"message": "Thành công",
		"description": null
	},
	"data": {
		"lastPlayed": 1578230825,
		"status": 1,
		"freeTurnLeft": 0,
		"paidTurnLeft": 0,
		"bonusTurnLeft": 0,
		"totalTurnLeft": 0,
		"gameLevel": 1,
		"freePlayed": 1,
		"paidPlayed": 0,
		"bonusPlayed": 0,
		"totalPieces": 0,
		"totalTurnsPlayed": 1,
		"totalTurns": 200,
		"totalIncurredTransaction": 0,
		"totalTransaction": 3,
		"vtPayLevel": 1,
		"levelPercent": 0.005,
		"totalTurnsLevel2": 200,
		"totalTransLevel2": 3,
		"totalTurnsLevel3": 350,
		"totalTransLevel3": 5,
		"bonusTurnLevel2": 10,
		"bonusTurnLevel3": 20,
		"lockRemain": 0
	}
};

$done({body: JSON.stringify(obj)});

//
