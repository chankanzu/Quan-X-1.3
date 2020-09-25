var obj = JSON.parse($response.body);

obj= {
{
  "identification_card" : null,
  "expiry_date" : "10/01/2099 09:27",
  "service_type" : "Miễn phí",
  "personalpackage_set" : [
    {
      "personal" : 13975,
      "package__name" : "Gói cơ bản",
      "is_active" : true,
      "expiry_date" : "01/10/2099"
    }
  ],
  "country" : "vn",
  "kid_limit" : 2,
  "birth_date" : null,
  "referral_use__barcode" : null,
  "referral_url" : "https://umbalena.vn/gioithieu/CN_0013975/",
  "referral_use__phone" : null,
  "referral_barcode" : null,
  "city" : null,
  "referral__barcode" : "CN_0013975",
  "id" : 13975,
  "is_active" : true,
  "gender" : null,
  "full_name" : "Khanh Du",
  "email" : "",
  "phone" : "+84984620985",
  "kid_personal_rel" : [
    4920
  ],
  "is_lock" : false,
  "packages" : [
    1
  ],
  "avatar" : null,
  "date_joined" : "25-09-2020 16:25",
  "point_bonus" : 0,
  "country__name" : "Vietnam (Việt Nam)",
  "password" : "pbkdf2_sha256$36000$ycIm4IH3x1R6$zh2bjaVXHlDyIeYtm0L8QWKm6lA78OEAvSHkVQ6NPX0=",
  "provider" : "personal",
  "address" : null,
  "username" : "khanhdu_vn_1"
};

$done({body: JSON.stringify(obj)});

//
