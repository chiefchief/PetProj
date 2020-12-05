---
inject: true
to: src/reducers/sagas.ts
before: // ADD WATCHER
---
    watch<%=h.changeCase.pascal(name)%>(),