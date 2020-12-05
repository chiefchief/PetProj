---
inject: true
to: android/app/build.gradle
after: dependencies {
skip_if: implementation\(project\(":react-native-google-signin"\)\)
---
	implementation(project(":react-native-google-signin"))