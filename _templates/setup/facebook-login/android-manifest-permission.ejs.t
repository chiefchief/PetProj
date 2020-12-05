---
inject: true
to: android/app/src/main/AndroidManifest.xml
before: <application
skip_if: <uses-permission android:name="android.permission.INTERNET"/>
---
		<uses-permission android:name="android.permission.INTERNET"/>