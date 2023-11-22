// Phân tích cú pháp của phản hồi
var responseBody = $response.body;
var parsedResponse = JSON.parse(responseBody);

// Định nghĩa đối tượng service_info với các thuộc tính cụ thể
var serviceInfo = {
    service: "F",
    story: "F",
    original_text: "F",
    vocabulary: "N",
    quiz: "F",
    sentence: "N",
    crossword: "N",
    translate: "N",
    starwords: "N",
    ebook: "F"
};

// Gán đối tượng service_info vào vị trí thích hợp trong đối tượng đã được phân tích cú pháp
parsedResponse.data.contents.service_info = serviceInfo;

// Chuyển đối tượng đã sửa đổi thành chuỗi JSON và hoàn tất hành động
var modifiedBody = JSON.stringify(parsedResponse);
$done({ body: modifiedBody });
