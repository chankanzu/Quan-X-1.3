//https://api.dungmori.com/api/get-list-course
var obj = JSON.parse($response.body);
obj= {
[{
	"id": 5,
	"author_id": "[\"1\",\"2\",\"10\",\"11\",\"12\"]",
	"name": "N5",
	"avatar_name": "1567647529_61725_d00a52.png",
	"price": 0,
	"stats_data": "{\"lesson\":\"25\",\"time\":\"0\",\"video\":\"150\"}",
	"watch_expired": 120,
	"jpy_price": 0
}, {
	"id": 4,
	"author_id": "[\"1\",\"2\",\"10\",\"11\",\"12\"]",
	"name": "N4",
	"avatar_name": "1567647510_49380_9d69c8.png",
	"price": 1290000,
	"stats_data": "{\"lesson\":\"25\",\"time\":\"6\",\"video\":\"145\"}",
	"watch_expired": 180,
	"jpy_price": 6500,
	"owned": true,
	"course_buy_day": "2020-03-10T22:47:51.000Z",
	"course_expired_day": "2021-08-28T10:48:42.000Z"
}, {
	"id": 3,
	"author_id": "[\"1\",\"2\",\"4\"]",
	"name": "N3",
	"avatar_name": "1567647491_37035_74451f.png",
	"price": 1790000,
	"stats_data": "{\"lesson\":\"27\",\"time\":\"6\",\"video\":\"138\"}",
	"watch_expired": 180,
	"jpy_price": 9000,
	"owned": true,
	"course_buy_day": "2020-04-13T15:37:16.000Z",
	"course_expired_day": "2021-08-28T10:48:42.000Z"
}, {
	"id": 16,
	"author_id": "[\"1\",\"2\"]",
	"name": "N2",
	"avatar_name": "1567647520_197520_027304.png",
	"price": 1790000,
	"stats_data": "{\"lesson\":\"20\",\"time\":\"6\",\"video\":\"140\"}",
	"watch_expired": 180,
	"jpy_price": 9000,
	"owned": true,
	"course_buy_day": "2020-08-29T04:42:21.000Z",
	"course_expired_day": "2021-02-25T03:02:50.000Z"
}, {
	"id": 17,
	"author_id": "[\"1\",\"2\",\"4\"]",
	"name": "N1",
	"avatar_name": "1541045903_209865_4d17e7.png",
	"price": 2390000,
	"stats_data": "{\"lesson\":\"20\",\"time\":\"8\",\"video\":\"145\"}",
	"watch_expired": 240,
	"jpy_price": 12000
  "owned": true,
	"course_buy_day": "2020-08-29T04:42:21.000Z",
	"course_expired_day": "2021-02-25T03:02:50.000Z"
}, {
	"id": 8,
	"author_id": "[\"1\",\"2\"]",
	"name": "EJU",
	"avatar_name": "1570502344_98760_05876a.png",
	"price": 2090000,
	"stats_data": "{\"lesson\":\"36\",\"time\":\"12\",\"video\":\"144\"}",
	"watch_expired": 360,
	"jpy_price": 10500
  "owned": true,
	"course_buy_day": "2020-08-29T04:42:21.000Z",
	"course_expired_day": "2021-02-25T03:02:50.000Z"
}, {
	"id": 21,
	"author_id": "[\"10\"]",
	"name": "Kaiwa",
	"avatar_name": "1583800267_259245_9a651a.png",
	"price": 1490000,
	"stats_data": "{\"lesson\":\"150\",\"time\":\"3\",\"video\":\"150\"}",
	"watch_expired": 100,
	"jpy_price": 7500
  "owned": true,
	"course_buy_day": "2020-08-29T04:42:21.000Z",
	"course_expired_day": "2021-02-25T03:02:50.000Z"
}, {
	"id": 22,
	"author_id": "[\"1\"]",
	"name": "Chuyên Ngành",
	"avatar_name": "1585800291_271590_2c1b6c.png",
	"price": 0,
	"stats_data": "{\"lesson\":\"21\",\"time\":\"0\",\"video\":\"0\"}",
	"watch_expired": 500,
	"jpy_price": 0
}]
};

$done({body: JSON.stringify(obj)});


// Descriptions
