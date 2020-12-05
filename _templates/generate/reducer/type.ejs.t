---
inject: true
to: src/reducers/types.ts
before: // ADD TYPE
---
  <%=h.changeCase.camel(name)%>: INITIAL_<%=h.changeCase.constant(name)%>;