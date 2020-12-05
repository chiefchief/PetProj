---
inject: true
to: android/app/src/main/res/values/strings.xml
after: <resources>
skip_if: <string name="android_facebook_app_id">
---
	<string name="facebook_app_id"><%= android_facebook_app_id %></string>