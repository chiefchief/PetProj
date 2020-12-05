---
inject: true
to: android/app/build.gradle
skip_if: 'com\.google\.gms\.google-services'
append: true
---
apply plugin: 'com.google.gms.google-services'