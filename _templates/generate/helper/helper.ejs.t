---
to: src/helpers/<%= name %>.ts
---
const <%= name %> = (arg: void): void => {
	return void
}

<%=h.changeCase.camel(name)%> | camel
<%=h.changeCase.constant(name)%> | constant
<%=h.changeCase.dot(name)%> | dot
<%=h.changeCase.header(name)%> | header
<%=h.changeCase.isLower(name)%> | isLower
<%=h.changeCase.isUpper(name)%> | isUpper
<%=h.changeCase.lower(name)%> | lower
<%=h.changeCase.lcFirst(name)%> | lcFirst
<%=h.changeCase.no(name)%> | no
<%=h.changeCase.param(name)%> | param
<%=h.changeCase.pascal(name)%> | pascal
<%=h.changeCase.path(name)%> | path
<%=h.changeCase.sentence(name)%> | sentence
<%=h.changeCase.snake(name)%> | snake
<%=h.changeCase.swap(name)%> | swap
<%=h.changeCase.title(name)%> | title
<%=h.changeCase.upper(name)%> | upper

export default <%= name %>