var obj = JSON.parse($response.body);

obj.data.contents.service_info=
{
			"service": "F",
				"story": "F",
				"original_text": "F",
				"vocabulary": "F",
				"quiz": "F",
				"sentence": "F",
				"crossword": "F",
				"translate": "F",
				"starwords": "F",
				"ebook": "F"
		};
obj.data.contents.user_service_info=
{
	      "story": "F",
				"original_text": "F",
				"vocabulary": "F",
				"quiz": "F",
				"sentence": "F",
				"crossword": "F",
				"translate": "F",
				"starwords": "F",
				"ebook": "F"
		};    
$done({body: JSON.stringify(obj)});

// Descriptionsp
