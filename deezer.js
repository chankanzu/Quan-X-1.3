//https://api.deezer.com/1.0/gateway.php?input=3&method=mobile_userAutolog&api_key=ZAIVAHCEISOHWAICUQUEXAEPICENGUAFAEZAIPHAELEEVAHPHUCUFONGUAPASUAY&buildId=ios11_universal&lang=us&mobile_tracking=eyJidW5kbGVfaWQiOiJjb20uZGVlemVyLkRlZXplciIsImlkZmEiOiI0RThFMDlGNC00M0RFLTQ3OTAtQjE2OS0wQ0I1NjJFMDg3ODgiLCJhZGlkIjoiIn0%3D&network=7ef5ed6684738013c9da9b048d704dc438a59d0d79675a77bdc89ecdd0bc4ee1&version=8.1.0&output=3&sid=fr9aab3800153449acc958be847064cb6355a893

var obj = JSON.parse($response.body);

obj= {
	"error": [],
	"results": {
		"USER_ID": 3257011444,
		"PREMIUM": {
			"OFFER_ID": "1",
			"DATE_START": "2019-11-22 05:33:14",
			"DATE_END": "2119-12-22 05:33:14",
			"PLATEFORM": "ogone",
			"TRY_AND_BUY": "1",
			"COMMITMENT": "0",
			"RENEWAL": "1",
			"STATUS": true,
			"RANDOM": "59f131a5a53f5edbe463528cb87ad908dfa8c837e56c5b705d41e1ddfaa564dd70e624d5c64c9afcf5e7f059c6aea5e878b83b74f10e67a949da21633ffb0036993dea13b49d0fd9db59eabea5fe259522d802e88427327194a81ad469d3ddc4dcff05eb6f02704d9250afc2cdacb603e483aa3d2bc097253b9ab55b2bdf22b73f80bfa78f1f3fb6162aa5adf021588aeb2c10d3bd38f762bc82ec325a99aaee7537de95f9ad21b2ac54adb27fe4648be5ad29133d26377948d61d62aeb3bfb8f38f85a40dbe97b7026d6bee399a34d220a22c3670f5e1353c799ef26efb38e67572e0656241af09afba9936d1547152eeb2809eb2e2b08e3300d700bb1e397656877975c88602f2a2845743abe85cf5918252409c7014b699f65723338e57bb0d391c401c3f83abdc62d5d7281c00a8804101e56246e2824326d42b1ca67630c42fc24f9331c896cdc43ba425a3d7e7f63583981223c7ec3d54cd1b246f3fb895f4aaa70b969069799f46f28a48b8e3b5957e98a2fa483feb1d48ffac6fca87f9dc822a326b824c4a2868158a4bdeb792dc46a05cdc082fccff249cbcd7b7f56cb54ed6ffece2137f2c347816990144019712ed47fc65b8449ea3c8c6076a598174721d63ffd3502572c3f22ae62cb65c4f1030c671dd5429491416f07c5310a2324d427dc7d6f9256997a66ed2f3c575bb83e9681ce37075f75374d61b1085e047699b2f2aa23a2b9af0f6bf034a9d0471413e28ca3609be556fedfa0138719df85ca84840079b31ed735ad503ae3fd6e905b1301e3119aea03d11f061007a9b6606165d3f67c39aa4b42bab97291974f19dc563cae2fead9c9a10476d9dc92c71c855c2a8f32c8c680487b8d6cbbe87d5780a2715b43ae484a3cfd16deaea6de9d82ed4b60c05137967c73f9d769765799d404afb4dd1a71f90317af974da9b9559921d4a26891084376b877f2ba205bee4d26f2c049d4a4f759d0ba6c6eba98f78ebcee22aade709973a5bbe7eea44d742a3796d73a39f3728b7b9d249cde2ed70a5c3b408a24c01b9093ebbb4607a9ef94631bdb6c7171613379652732fdc98539a7880844f29ea748b18c7c2073c9ed466347f7a017b10fa462778661db5c099eb9879c5b2f6fcf9ac0c924785a1926c89e70bb9e2dd53a670e26b0ac0d65ca3fb33e0ef815b344e7f0a7d694e56498e99f4a7bb23f2e483bd774394a1362399b6418ea7ae34252550c8ca243d0f90e2ae81f805912a3e2eaaf4664b14278ac6f67b4ca517019f10fe54363d41655081892537a38eb50f91215c25002961551cd8bf6e172888240a48e4efd3b8101d2226025a4f78a466ac2be4ed3f214c4eebeda79b28c6531f4887b80ad32da3b5e1970bdb2e4a00db379ef1f5f7f72965b49f8b4d1c05b2835922eb71ade91233165a88b60be9f9322bf8ee05d1e9d107a4ad2a876973e3ee0b19336c1ecb59055081677219af57211b03a77674a348ab87aeaa474062a53e6b802613632e952aca31b1041134118dd886876bc35ad1af1261bd596d49a1c625065ed0682dafc5f24fe77fe846555d1a47971a21c56b02767680cf201ef2f1d062d65d3f9667ce40774c6664772b3dded5604aa3147ab5c09e46b19333a70d868dd5be978d0e3b8d2e951f3a084373fb9aaa5c2859",
			"OFFER_NAME": "Deezer Premium",
			"IS_B2B": false,
			"TRY_AND_BUY_CC_DONE": true
		},
		"COUNTRY": "VN",
		"ZONE": "ASIA",
		"EMAIL": "svcntnk42a1@gmail.com",
		"SEX": "M",
		"FB_USER_ID": "3082022801811257",
		"FB_TOKEN": "EAAAAOC2lyYIBABj8oktqPXCkH8X2UZCjEJGsisQRjyOT0nGer6eOIqrEKojXaYhIZA012As6ZBfLmPZBJZBNbcAtvZBD2vPg9nKN7hfPKt82lXWuIatiZCBypteqmk8pQ62s5CZCDdBq8aBEWZCEI0hxqYOyLfKIZAb2iYrNs0BG89ngZDZD",
		"GG_USER_ID": "",
		"GG_TOKEN": "",
		"TWITTER_TOKEN": "",
		"TWITTER_SECRET": "",
		"USER_TOKEN": "tkf23d613b5ede93e047e4554a39c75076",
		"NOTIFICATION_UNREAD": 2,
		"EXPLICIT_CONTENT_LEVEL": "explicit_display",
		"EXPLICIT_CONTENT_LEVELS_AVAILABLE": ["explicit_display", "explicit_no_recommendation", "explicit_hide"],
		"FIRSTNAME": "Jun",
		"LASTNAME": "B\u1ed1",
		"BLOG_NAME": "B\u1ed1 Jun",
		"USER_PICTURE": "38e09340db6c9cbd3facd594169238d9",
		"AGE": 31,
		"IS_KID": false,
		"USER_PHONE": {},
		"ARL": "1d1f786dc10c7ad47aed8178b72334943d06ec1848e1d9d8c75e63c5e8c0a4c5172b3572abe89e4588a8b151ed129f5f0b00c812c0e8a920b2c98bdee889612d31cfbec7e86a5e99529d8c183d39c626c7e814ade0d2de482fa1b33ea301f38f",
		"MULTI_ACCOUNT": {
			"enabled": true,
			"active": true,
			"max_children": 6,
			"parent": null
		},
		"GATEKEEPER": {
			"endofyear_website": false,
			"artist_mix_as_feature": true,
			"curator_feature": false,
			"lego_adapter_album_page": false,
			"lego_adapter_artist_page": false,
			"mena_launch": false,
			"mobile_masthead_v2": true,
			"share_instagram_story": true,
			"share_lyrics_instagram_story": true,
			"artist_highlight": true,
			"concert_page": false,
			"android_labs": false,
			"avaudioengine": true,
			"cedexis_radar": false,
			"cdn_metrics": false,
			"metric.timetoplay": false,
			"dark_mode": true,
			"dzplayer_refacto": false,
			"public_api_test": true,
			"public_api_visible_test": false,
			"sentry": false,
			"serverside_media_url": true,
			"session_regeneration": false,
			"triforce_queuelist_messages": true,
			"triforce_queuelist_ui": true,
			"use_media_service": false,
			"volume_normalization": false,
			"activate_becks_landing_redirection": true,
			"activate_optin_confirmation": true,
			"ads_debug": false,
			"ad_mobile_formats": false,
			"ad_triton": false,
			"ad_sponsored_tracks": true,
			"ad_disable_inmobi": true,
			"ads_transparency_report": false,
			"api_rest_restriction": false,
			"app_launch_custo": false,
			"app_premium_tab": false,
			"apprating_electron": false,
			"apprating_incentive": false,
			"apprating_mobile": true,
			"audio_ads": true,
			"authentication_phone": false,
			"banner_ad": false,
			"block_appboy_messages": false,
			"box_conversion_free": true,
			"box_conversion_mobile_tablet": true,
			"custo_collect_optin": false,
			"deactivate_android_new_unlogged": false,
			"disable_conversion_boxes": false,
			"disable_device_limitation": false,
			"discovery_enable_dismiss_banner": false,
			"family_b2c": false,
			"family_screen": false,
			"fan_mediation_ios": true,
			"flow_card_remove_tracklist": false,
			"force_homepage_redirection_to_hifi_page": false,
			"free_xp_hide_contextual_menu_mod_actions": false,
			"free_xp_snackbar_wordings_shuffle": false,
			"free_xp_happy_hour": false,
			"free_xp_happy_hour_test_relog_workload": false,
			"reset_queuelist_on_switch_to_free": false,
			"iam_new_release": false,
			"log_premium_with_ads": true,
			"inbox_v0": true,
			"mobile_redirect_in_browser": true,
			"mobile_trial_manual": false,
			"mobile_trial_manual_open_all": true,
			"mobile_signup_incentive": false,
			"mysetting_family_entrypoint": true,
			"modulo_uniq_id_test_employee": false,
			"modulo_uniq_id_test_unlogged": false,
			"native_ad": false,
			"native_app_rating_android": true,
			"native_app_rating_ios": false,
			"native_reg_android": true,
			"native_reg_ios": true,
			"new_hp_artwork": false,
			"new_optin_categories": true,
			"offerwall": true,
			"offerwall_v2": false,
			"onboarding_artists": true,
			"onboarding_disable_welcome_mobile": false,
			"opening_interstitial_ios": true,
			"optimove": false,
			"passculture_landing_availability": false,
			"payment_api_ng": false,
			"performance_monitoring": false,
			"premium_box": true,
			"push_collect_optin": false,
			"push_custo_collect_optin": false,
			"push-trial-end": true,
			"radiobydeezer_landing_availability": false,
			"reactivation_desktop_notification": false,
			"recommendation_country": false,
			"refresh_appcusto_templates": false,
			"restricted_shuffle": false,
			"restricted_shuffle_algos": false,
			"seasonal_offer": false,
			"seasonal_offer_logged": false,
			"seasonal_offer_unlogged": false,
			"seasonal_offer_custo_app_home": false,
			"seasonal_offer_custo_app_endoftrial": false,
			"family_seasonal_offer": false,
			"slash_standalone": false,
			"smart_offer": false,
			"student_offer": false,
			"track_preview": false,
			"web2mobile": false,
			"webchat_desktop": false,
			"webchat_mobile": false,
			"welcome_trial_mail": false,
			"cast_receiver_v5": false,
			"free_on_cast": false,
			"partner_activation_journey": false,
			"gcast_force_beta": false,
			"gift_page_preview": false,
			"operator_v2": false,
			"operator_termsconditions": false,
			"talk_api": false,
			"voicecallback": false,
			"voice_control_freemium_amazon": true,
			"orange_ohp_migration": false,
			"waze": true,
			"30s_preview": true,
			"favorites_tab_redesign": false,
			"algo_mixes_from_channel": false,
			"android_incorrect_stl_carousel_support": false,
			"close_block_feature": false,
			"carplay": true,
			"cms_video": true,
			"dark_mode_easter_egg": false,
			"dislike_song_ng": false,
			"downloaded_podcast_episodes": false,
			"dynamic_page_v21": true,
			"audiobook": false,
			"lighten_dynamicpage_content": true,
			"flow_back_queuelist": true,
			"flow_in_homepage": true,
			"flow_tab_deprecated": false,
			"ios_datomic": false,
			"listen_later": false,
			"mymusic_recently_played": false,
			"onboarding_channels": true,
			"onboarding_split": true,
			"player_feedback": false,
			"playlist_limit_2000": true,
			"recently_played_async_event": false,
			"recently_searched_read": true,
			"recently_searched_filter_episodes": true,
			"search_audiobook": false,
			"search_autocorrect": true,
			"search_enriched_topresult": true,
			"search_livestream": false,
			"inapp_audiobooks": false,
			"search_noresult": false,
			"search_query_suggestions": true,
			"search_refacto": false,
			"search_tag": false,
			"search_topresult": false,
			"search_page_filter_type": false,
			"songcatcher": false,
			"tab_flow_v1": true,
			"tab_podcast": true,
			"talk": false,
			"talk_latest_playlist": false,
			"trending_queries": true,
			"single_instance_playback": true,
			"api_mob_ssl": true,
			"force_v5": true,
			"reco_channels_editor_tags": false,
			"mobile_offline_expiration": false,
			"synchro_web_to_mobile": false,
			"console_log": false,
			"operator_test": false,
			"curator_edito": false,
			"curator_label": false,
			"curator_telco": false,
			"curator_partner": false,
			"curator_local": false,
			"employee_feature": false,
			"instant_auth": true,
			"cell_add_to_library": true,
			"facebook_sso_wp": false,
			"news_entertainment": false,
			"opening_interstitial_mobile_v2": true,
			"landing_campaign": false,
			"material_design": false,
			"feed_empty": true,
			"android_sponge": false,
			"android_jukebox": false,
			"video_ads": false,
			"ios_request_engine_v2": true,
			"ios_new_filter_swift": true,
			"mixes_old_tags": false,
			"deezerdata_service": false,
			"mobile_mod_player": false,
			"ios_websocket_ng": false,
			"awareness_headphones": false,
			"batch_utm_logs": false,
			"exo_player_2": false,
			"open_explicit_display": true,
			"explicit_user_settings": true,
			"ucps_box": false,
			"ios_developer_menu": false,
			"mymusic_display_dislikes": false,
			"ucps_website": true,
			"enable_kill_session": true,
			"student_special_offer": false,
			"inbox_v1": true,
			"inbox_v2": true,
			"multi_account": true,
			"multi_account_subscribe": true,
			"new_search": true,
			"search_users": true,
			"search_channel": true,
			"latest_episodes": true,
			"desktop_client_windows": true,
			"onboarding_handle_genre": true,
			"android_auto": true,
			"native_reg_wp": true,
			"new_home": true,
			"moods": true,
			"player_ng": true,
			"channels": true,
			"mymusic_masthead": true,
			"mymusic_nodatas": true,
			"mymusic_tests_2016aug": true,
			"playlist_ng_create": true,
			"playlist_read_ng": true,
			"fnac_migration": true,
			"worker_ng_send_mail": true,
			"opening_interstitial_android": true,
			"recaptcha_signup": true,
			"shuffle_online": true,
			"sponsored_track_audio_signal": true,
			"electron_html5_playback": true,
			"notification_center": true,
			"GDPR": true,
			"network_status_bar": true,
			"conversion_entrypoints_ng": true,
			"up_next": true,
			"recaptcha_login": true,
			"filter_content_for_verified_artists": true
		},
		"ABTEST": {
			"artistmix_algorithms": {
				"id": "ARTIST_MIXES",
				"option": "default",
				"behaviour": "default artist mix algorithm"
			},
			"flow_algorithms": {
				"id": "FLOW-October-2019",
				"option": "S",
				"behaviour": "reorder Flow tracks according to musical genre and mood"
			},
			"search": {
				"id": "search",
				"option": "default",
				"behaviour": "Default search"
			},
			"end_of_session": {
				"id": "end_of_session",
				"option": "B",
				"behaviour": "EOS sent"
			},
			"triforce_queuelist_ui": {
				"id": "triforce_queuelist_ui",
				"option": "default",
				"behaviour": "Cloud based queue list deactivated"
			},
			"mobile_trial_activation_open_all": {
				"id": "mobile_trial_manual",
				"option": "manual_activation",
				"behaviour": "Manual activation of the trial mobile"
			},
			"ios_avaudioengine": {
				"id": "ios_avaudioengine",
				"option": "new",
				"behaviour": "New audio engine"
			},
			"free_xp_snackbar_wordings_new_reg": {
				"id": "free_xp_snackbar_wordings",
				"option": "A",
				"behaviour": "Wordings focussed on free restriction"
			},
			"onboarding_artists-1_2": {
				"id": "onboarding_artists-1_2",
				"option": "default",
				"behaviour": "Default onboarding top artist"
			},
			"playlists_suggestion_algorithm": {
				"id": "playlists_suggestion_algorithm",
				"option": "default",
				"behaviour": "Playlists suggestion using kmeans segment (default)"
			},
			"free_xp_happy_hour_test": {
				"id": "free_xp_happy_hour_test",
				"option": "happy_hour_available",
				"behaviour": "Happy hour available"
			},
			"offerwall_v2": {
				"id": "offerwall_v2",
				"option": "offerwall_v2",
				"behaviour": "New offerwall"
			}
		},
		"DEVICE_ALREADY_LINKED": "0",
		"MAX_NB_DEVICES": "3",
		"AUDIO_SETTINGS": {
			"default_preset": "fast",
			"default_download_on_mobile_network": false,
			"presets": [{
				"mobile_download": "standard",
				"mobile_streaming": "standard",
				"wifi_download": "standard",
				"wifi_streaming": "standard",
				"id": "fast",
				"title": "Compact",
				"description": "Adjust audio quality to reduce data usage."
			}, {
				"mobile_download": "standard",
				"mobile_streaming": "standard",
				"wifi_download": "high",
				"wifi_streaming": "high",
				"id": "balanced",
				"title": "Balanced",
				"description": "Improve audio quality when connected to WiFi."
			}, {
				"mobile_download": "high",
				"mobile_streaming": "high",
				"wifi_download": "high",
				"wifi_streaming": "high",
				"id": "quality",
				"title": "Better",
				"description": "Best audio quality available."
			}],
			"connected_device_streaming_preset": "high"
		},
		"AD_CONFIGS": {
			"audio": {
				"default": {
					"start": 1,
					"interval": 3,
					"unit": "track"
				}
			},
			"display": {
				"interstitial": {
					"start": 900,
					"interval": 900,
					"unit": "sec"
				}
			}
		},
		"DESCRIPTION": "svcntnk42a1@gmail.com",
		"PROFIL": {
			"ROAMING": "0",
			"NETWORK": "-",
			"ACTIVE": {},
			"CUSTOM": {}
		},
		"CUSTO": {
			"DATA": {
				"id": "1",
				"name": "premiumplus_FR",
				"lang": {
					"locale": ["en", "fr", "nl", "ru", "pt", "es", "it", "de", "pl", "pt-br", "ro", "th", "ms", "id", "hu", "tr"],
					"default_locale": "en"
				},
				"buy_itunes": {
					"activated": "true"
				},
				"startup_push": {
					"action": [{
						"condition": "TRY_AND_BUY_MOB_OLD",
						"priority": "1",
						"type": "POPUP",
						"popup": {
							"text_id": "tryandbuy.mobile"
						}
					}, {
						"condition": "android_generic_3.000",
						"priority": "2",
						"type": "POPUP",
						"popup": {
							"text_id": "update",
							"button": {
								"text_id": "update.ok",
								"action": [{
									"condition": "NONE",
									"type": "CLOSE_POPUP"
								}, {}]
							}
						}
					}, {
						"condition": "android_generic_3.001",
						"priority": "3",
						"type": "POPUP",
						"popup": {
							"text_id": "update",
							"button": {
								"text_id": "update.ok",
								"action": [{
									"condition": "NONE",
									"type": "CLOSE_POPUP"
								}, {}]
							}
						}
					}, {
						"condition": "android_generic_3.002",
						"priority": "4",
						"type": "POPUP",
						"popup": {
							"text_id": "update",
							"button": {
								"text_id": "update.ok",
								"action": [{
									"condition": "NONE",
									"type": "CLOSE_POPUP"
								}, {}]
							}
						}
					}, {}]
				}
			},
			"VERSION_KEY": "WW_1__18"
		},
		"CUSTO_CONDITIONS": {
			"STORE_DIRECT": true,
			"ios11_universal_8.1.0": true,
			"TRYNBUY_DONE": true,
			"PARTNER_DISPLAY_EXTERNAL_CONTENT_WARNING": false
		},
		"DEFAULT_PLAYLIST_ID": "6853538024",
		"APPSTUDIO": {
			"apps": true,
			"store": true
		},
		"WAITING_FOR_PAYMENT": false,
		"CUSTOM_TEXTS": [],
		"OFFER_ELIGIBILITIES": [],
		"CONVERSION_ENTRYPOINTS": [],
		"OFFER_BOX_URL": "https:\/\/www.deezer.com\/us\/paywalls?app_version=8.1.0.4&ts=1574397503&sid=fr9aab3800153449acc958be847064cb6355a893&user_id=3257011444",
		"APPCUSTO_CHECKSUM": "",
		"CHECKSUMS": {
			"OFFERWALL": "7deca95061048c3fcc31786c5f553101"
		},
		"SHOW_OPTIN_BUTTON": {
			"URL": "https:\/\/www.deezer.com\/us\/optin-box-inapp",
			"LABEL": "Communication preferences"
		},
		"HAS_CONSENT": true,
		"CONSENT": {
			"STATISTICS": true,
			"TARGETED_ADS": true,
			"CONSENT_STRING": "BOqae86Oqaf52A7ABBUSBt-AAAAh57__f____8_v3_9_NuzvGv_j_ef-3VW8fvIvMEtzh45d7uvQTxY4m_0rRd9ycgx85eprGkoxQ6qCsG-VOg995t_73zgA"
		},
		"NEW_USER": false
	}
};

$done({body: JSON.stringify(obj)});

//
