---
inject: true
to: android/app/src/main/AndroidManifest.xml
before: <activity
skip_if: <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
---
		<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>