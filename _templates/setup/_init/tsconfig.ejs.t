---
inject: true
to: tsconfig.json
after: baseUrl
skip_if: assets
---
    "baseUrl": "./",
    "paths": {
      "@assets": ["src/assets/index"],
      "@components": ["src/components/index"],
      "@constants": ["src/constants/index"],
      "@helpers": ["src/helpers/index"],
      "@hooks": ["src/hooks/index"],
      "@reducers/*": ["src/reducers/*"],
      "@screens": ["src/screens/index"],
      "@services": ["src/services/index"],
      "@types": ["src/types/index"]
    },