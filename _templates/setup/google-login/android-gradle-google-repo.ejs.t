---
inject: true
to: android/build.gradle
after: allprojects {\n.*repositories {
skip_if: google\(\)
---
		google()