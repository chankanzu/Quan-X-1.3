var obj = JSON.parse($response.body);
obj= {
	"data": "1",
	"IsReview": "1",
	"Isversion": "2.2.3",
	"IsversionAndrod": "2.1.4",
	"listdata": ["home_en=1.2", "home_mat=1.1", "hone_phonic=1.1", "home_lt=1.3", "cate_en_1=1.8", "cate_en_2=1.5", "cate_en_3=1.5", "cate_en_4=1.5", "cate_en_5=1.5", "cate_en_6=1.5", "cate_en_364=1.5", "cate_en_447=1.3", "cate_en_468=1.3", "cate_en_469=1.3", "cate_en_573=1.0", "cate_en_614=1.0", "cate_en_615=1.0", "cate_phonic_1=1.4", "cate_phonic_28=1.4", "cate_mat_10=1.4", "cate_mat_11=1.4", "cate_mat_12=1.4", "cate_mat_13=1.4", "cate_mat_20=1.4", "cate_mat_23=1.4", "cate_lt_726=1.5", "cate_lt_727=1.5", "cate_lt_735=1.5", "cate_lt_744=1.5", "cate_lt_757=01.5", "cate_lt_758=01.5"],
	"listdatalock": ["cate_en_1=0", "cate_en_2=0", "cate_en_3=0", "cate_en_4=0", "cate_en_5=0", "cate_en_6=0", "cate_en_364=0", "cate_en_447=0", "cate_en_468=0", "cate_en_469=0", "cate_en_573=0", "cate_en_614=0", "cate_en_615=0", "cate_phonic_1=0", "cate_phonic_28=0", "cate_mat_10=0", "cate_mat_11=0", "cate_mat_12=0", "cate_mat_13=0", "cate_mat_20=0", "cate_mat_23=0", "cate_lt_726=0", "cate_lt_727=0", "cate_lt_735=0", "cate_lt_744=0", "cate_lt_757=0", "cate_lt_758=0"],
	"ShowThiThu": "0"
};

$done({body: JSON.stringify(obj)});


// Descriptions
