---
inject: true
to: android/app/build.gradle
after: dependencies {
skip_if: implementation 'com.facebook.android:facebook-android-sdk:\[4,5\)'
---
	implementation 'com.facebook.android:facebook-android-sdk:[4,5)'