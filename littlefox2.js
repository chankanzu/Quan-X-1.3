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
	      "story": "Y",
				"original_text": "Y",
				"vocabulary": "Y",
				"quiz": "Y",
				"sentence": "Y",
				"crossword": "Y",
				"translate": "Y",
				"starwords": "Y",
				"ebook": "Y"
		};    
$done({body: JSON.stringify(obj)});

// Descriptionsp
