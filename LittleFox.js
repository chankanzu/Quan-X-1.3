// Định nghĩa đối tượng service_info với các thuộc tính cụ thể
var serviceInfo = {
    service: "F",
    story: "F",
    original_text: "F",
    vocabulary: "F",
    quiz: "F",
    sentence: "F",
    crossword: "F",
    translate: "F",
    starwords: "F",
    ebook: "F"
};

// Tạo đối tượng user_service_info với các thuộc tính tương tự như service_info, nhưng có giá trị khác
var userServiceInfo = {
    service: "F",
    story: "F",
    original_text: "F",
    vocabulary: "F",
    quiz: "F",
    sentence: "F",
    crossword: "F",
    translate: "F",
    starwords: "F",
    ebook: "F"
};

// Gán các đối tượng vào các vị trí thích hợp trong đối tượng đã được phân tích cú pháp
parsedResponse.data.contents.service_info = serviceInfo;
parsedResponse.data.contents.user_service_info = userServiceInfo;

// Chuyển đổi đối tượng đã sửa đổi thành chuỗi JSON và hoàn tất hành động
var modifiedBody = JSON.stringify(parsedResponse);
$done({ body: modifiedBody });
