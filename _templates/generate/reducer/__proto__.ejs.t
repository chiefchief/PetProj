---
inject: true
to: src/reducers/__proto__.ts
append: true
---

export class INITIAL_<%=h.changeCase.constant(name)%> {
  constructor(data: any = {}) {
    this.value = data.value || '';
  }
  value: string;
}