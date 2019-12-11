//https://settings.crashlytics.com/spi/v2/platforms/ios/apps/com.gocas.byroon/settings?build_version=1&display_version=4.1&instance=37442254d173900edae3e26d3de82a268967c238&source=1

var obj = JSON.parse($response.body);

obj= {
	"settings_version": 2,
	"cache_duration": 86400,
	"features": {
		"collect_logged_exceptions": true,
		"collect_reports": true,
		"push_enabled": true,
		"firebase_crashlytics_enabled": true
	},
	"analytics": {
		"url": "https://e.crashlytics.com/spi/v2/events",
		"flush_interval_secs": 300,
		"max_file_count_per_send": 1,
		"track_custom_events": true,
		"track_predefined_events": true,
		"flush_on_background": true,
		"max_byte_size_per_file": 8000,
		"max_pending_send_file_count": 100,
		"sampling_rate": 1
	},
	"beta": {
		"update_suspend_duration": 1800,
		"update_endpoint": "https://api.crashlytics.com/spi/v2/platforms/ios/apps/com.gocas.byroon/beta_update_check"
	},
	"app": {
		"identifier": "com.gocas.byroon",
		"status": "activated",
		"url": "https://api.crashlytics.com/spi/v1/platforms/ios/apps/com.gocas.byroon",
		"reports_url": "https://reports.crashlytics.com/spi/v1/platforms/ios/apps/com.gocas.byroon/reports",
		"ndk_reports_url": "https://reports.crashlytics.com/sdk-api/v1/platforms/android/apps/com.gocas.byroon/minidumps"
	},
	"session": {
		"log_buffer_size": 64000,
		"max_chained_exception_depth": 16,
		"max_complete_sessions_count": 4,
		"max_custom_exception_events": 8,
		"max_custom_key_value_pairs": 64,
		"identifier_mask": 255
	},
	"prompt": {
		"title": "Send Crash Report?",
		"message": "Looks like we crashed! Please help us fix the problem by sending a crash report.",
		"send_button_title": "Send",
		"show_cancel_button": true,
		"cancel_button_title": "Don\u0027t Send",
		"show_always_send_button": true,
		"always_send_button_title": "Always Send"
	}
};

$done({body: JSON.stringify(obj)});

//
