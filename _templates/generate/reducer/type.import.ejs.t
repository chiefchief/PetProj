---
inject: true
to: src/reducers/types.ts
before: // ADD IMPORT TYPE
---
  INITIAL_<%=h.changeCase.constant(name)%>,