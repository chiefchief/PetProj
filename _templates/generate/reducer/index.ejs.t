---
inject: true
to: src/reducers/index.ts
before: // ADD NEW REDUCER
---
  <%=h.changeCase.camelCase(name)%>: require('./<%=h.changeCase.camelCase(name)%>').default,