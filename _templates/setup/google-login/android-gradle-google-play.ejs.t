---
inject: true
to: android/build.gradle
after: buildscript {\n.*ext {
skip_if: googlePlayServicesAuthVersion
---
		googlePlayServicesAuthVersion = "15.0.1"