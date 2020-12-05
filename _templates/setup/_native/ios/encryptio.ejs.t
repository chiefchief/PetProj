---
inject: true
to: ios/<%=appName%>/Info.plist
after: <dict>
skip_if: <key>ITSAppUsesNonExemptEncryption</key>
---
	<key>ITSAppUsesNonExemptEncryption</key>
	<false/>