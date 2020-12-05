---
inject: true
to: .gitignore
append: true
skip_if: /ios/Podfile.lock
---
/ios/Podfile.lock
*.xcworkspace

# Other
package-lock.json