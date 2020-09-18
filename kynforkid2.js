var obj = JSON.parse($response.body);
obj= {
	"success": true,
	"data": [{
		"id": 7,
		"name": "Phonics",
		"slug": "phonics",
		"image_url": "/default/package/thumbs/package/package-phonics.png",
		"is_gift": true
	}, {
		"id": 8,
		"name": "Pre-Starters",
		"slug": "pre-starters",
		"image_url": "/default/package/thumbs/package/package-prestarters.png",
		"is_gift": true
	}, {
		"id": 9,
		"name": "Starters",
		"slug": "starters",
		"image_url": "/default/package/thumbs/package/package-starters.png",
		"is_gift": true
	}, {
		"id": 10,
		"name": "Movers",
		"slug": "movers",
		"image_url": "/default/package/thumbs/package/package-movers.png",
		"is_gift": true
	}, {
		"id": 11,
		"name": "Flyers",
		"slug": "flyers",
		"image_url": "/default/package/thumbs/package/package-flyers.png",
		"is_gift": true
	}, {
		"id": 176,
		"name": "Vocabulary",
		"slug": "vocabulary",
		"image_url": "/default/package/thumbs/package/package-vocab.png",
		"is_gift": true
	}, {
		"id": 177,
		"name": "Science & Technology",
		"slug": "science-technology",
		"image_url": "/default/package/thumbs/package/package-science.png",
		"is_gift": true
	}, {
		"id": 178,
		"name": "Mathematics",
		"slug": "mathematics",
		"image_url": "/default/package/thumbs/package/package-math.png",
		"is_gift": true
	}]
};

$done({body: JSON.stringify(obj)});


// Descriptions
