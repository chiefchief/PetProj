---
inject: true
to: android/settings.gradle
after: rootProject\.name
skip_if: react-native-google-signin
---
include ':react-native-google-signin', ':app'
project(':react-native-google-signin').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-google-signin/android')