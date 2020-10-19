var obj = JSON.parse($response.body);
obj.data.contents.service_info=
{
				"service": "F",
				"story": "F",
				"original_text": "F",
				"vocabulary": "N",
				"quiz": "F",
				"sentence": "N",
				"crossword": "N",
				"translate": "N",
				"starwords": "N",
				"ebook": "F"
			};
$done({body: JSON.stringify(obj)});
