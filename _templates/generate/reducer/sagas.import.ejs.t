---
inject: true
to: src/reducers/sagas.ts
before: // ADD IMPORT
---
import {watch<%=h.changeCase.pascal(name)%>} from './<%=h.changeCase.camel(name)%>';