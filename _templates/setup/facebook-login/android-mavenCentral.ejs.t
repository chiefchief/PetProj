---
inject: true
to: android/build.gradle
after: repositories {
skip_if: mavenCentral()
---
		mavenCentral()