---
inject: true
to: android/build.gradle
after: dependencies {
skip_if: com\.android\.tools\.build:gradle
--- 
		classpath 'com.android.tools.build:gradle:3.4.1'