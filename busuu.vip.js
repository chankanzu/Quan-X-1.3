var obj = JSON.parse($response.body);
;obj.data.is_premium= true;

obj.data.premium_data.current_plan.active= true;
obj.data.premium_data.subscription_status="active";
obj.data.premium_data.subscriptionType= "1y";
obj.data.premium_data.free_trial.free_trial= true;
obj.data.premium_data.expiration= 1685289207;
obj.data.premium_data.next_charge= 1685289207;

$done({body: JSON.stringify(obj)});




