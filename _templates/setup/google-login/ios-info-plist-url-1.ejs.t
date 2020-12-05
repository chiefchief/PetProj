---
inject: true
to: ios/<%= ios_project_name %>/Info.plist
after: <dict>
skip_if: <key>CFBundleURLTypes</key>
---
	<key>CFBundleURLTypes</key>
	<array>
	</array>