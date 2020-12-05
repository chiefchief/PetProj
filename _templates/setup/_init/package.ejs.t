---
inject: true
to: package.json
after: scripts
skip_if: watchman
---
    "android_release_apk": "cd android && ./gradlew clean && ./gradlew assembleRelease && cd ../",
    "android_release_bundle": "cd android && ./gradlew clean && ./gradlew bundleRelease && cd ../",
    "pod_clean": "cd ios && pod deintegrate && pod clean && pod install && cd ../",
    "postinstall": "npm run pod_clean",
    "watchman": "watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && npm cache verify && npm install && npm start -- --reset-cache",