let obj = JSON.parse($response.body);
  obj["receipt"]["expires_date_formatted"]= "2099-06-05 13:15:31 Etc/GMT";
  obj["receipt"]["expires_date_formatted_pst"]= "2099-06-05 06:15:31 America/Los_Angeles";
  obj["receipt"]["expires_date"]= "1991362931931";
  obj["latest_receipt_info"]["expires_date_formatted"]= "2099-06-05 13:15:31 Etc/GMT";
  obj["latest_receipt_info"]["expires_date_formatted_pst"]= "2099-06-05 06:15:31 America/Los_Angeles";
  obj["latest_receipt_info"]["expires_date"]= "1991362931000";
  obj["expires_ms"]= 1991362931;

$done({body: JSON.stringify(obj)});
