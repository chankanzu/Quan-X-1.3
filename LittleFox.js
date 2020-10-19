var obj = JSON.parse($response.body);
obj.data.contents.service_info.service="F";
obj.data.contents.service_info.story="F";
obj.data.contents.service_info.original_text="F";
obj.data.contents.service_info.quiz="F";
obj.data.contents.service_info.ebook="F";
obj.data.contents.service_info.vocabulary="F";
$done({body: JSON.stringify(obj)});
