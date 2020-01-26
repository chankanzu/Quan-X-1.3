var obj = JSON.parse($response.body);
obj={
 "device_data_version_info": "ABFEt1Uf4sIMEDcunvSTBphdhpd55LdurXh8iarfTCKPCRVDwe75RrIAmrH5fA98hpy12zz65_XiP1w_l7XjLDkmgNlcd1yDNO95PF8vw7u8qupkS16bMOHRvFFWHbnWz9zgNlThTk_x2aENfyS2TDCPyqYAARxadhnVGy9pnW2Ukzg73PU0xUpsv5RGE23Ba2Ka28fCkJKBMSLGo32vS3srlsQTdMTgquZEEuABMJwy-XG_6X4S8_TflU9zfSCagT3euzNO1LmVEuh0C95-aZRwYMa8sIuRDG2p-TBFJQls-lsQ-o5_FXTZGnY0isxMIInOzHeCNfe5vcVP12tNir_Iybc_z3ZE72ANuyV2I5vF4T4AUcRcJ4Q",
 "stats_ok": true,
 "security_token": 1300707978381866200,
 "digest": "QjRd88NRoO0/rQ6ZOVvfUw==",
 "time_msec": 1980050675289,
 "version_info": "49KqbdssGmEQoOhBO1boBVylYL8l_hY",
 "android_id": 5494095639687106000,
 "intent": [
  {
   "action": "com.google.android.gms.checkin.NOOP"
  }
 ],
 "setting": [
  {
   "name": "android_id",
   "value": "5494095639687105040"
  },
  {
   "name": "device_country",
   "value": "vn"
  },
  {
   "name": "device_registration_time",
   "value": "1580047200000"
  },
  {
   "name": "ios_device",
   "value": "1"
  }
 ]
};

$done({body: JSON.stringify(obj)});
