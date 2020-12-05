---
inject: true
to: ios/<%= ios_project_name %>/Info.plist
after: <key>CFBundleURLTypes<\/key>\n.*<array>
skip_if: <string><%= ios_reserved_client_id %></string>
---
		<dict>
			<key>CFBundleTypeRole</key>
			<string>Editor</string>
			<key>CFBundleURLSchemes</key>
			<array>
				<string><%= ios_reserved_client_id %></string>
			</array>
		</dict>