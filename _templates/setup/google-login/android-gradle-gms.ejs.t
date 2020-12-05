---
inject: true
to: android/build.gradle
after: dependencies {
skip_if: com\.google\.gms:google-services
---
		classpath 'com.google.gms:google-services:4.2.0'