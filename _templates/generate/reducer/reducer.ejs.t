---
to: src/reducers/<%=h.changeCase.camelCase(name)%>.ts
---
import { takeLatest, put, call, select } from 'redux-saga/effects'
import { push } from '@services'
import {INITIAL_<%=h.changeCase.constant(name)%>} from './__proto__';

const GET_<%=h.changeCase.constant(name)%> = '[<%=h.changeCase.camelCase(name)%>] GET_<%=h.changeCase.constant(name)%>'
const SET_<%=h.changeCase.constant(name)%> = '[<%=h.changeCase.camelCase(name)%>] SET_<%=h.changeCase.constant(name)%>'
const RESET_<%=h.changeCase.constant(name)%> = '[<%=h.changeCase.camelCase(name)%>] RESET_<%=h.changeCase.constant(name)%>'

const initialstate = new INITIAL_<%=h.changeCase.constant(name)%>();

export default (state = initialstate, action: any) => {
	switch (action.type) {
		case SET_<%=h.changeCase.constant(name)%>:
			return new INITIAL_<%=h.changeCase.constant(name)%>({...state, data: action.data})
		case RESET_<%=h.changeCase.constant(name)%>:
			return initialstate
		default:
			return state
	}
}

export const get<%=h.changeCase.pascal(name)%> = () => ({ type: GET_<%=h.changeCase.constant(name)%> })
export const set<%=h.changeCase.pascal(name)%> = (data: any) => ({ data, type: SET_<%=h.changeCase.constant(name)%> })
export const reset<%=h.changeCase.pascal(name)%> = () => ({ type: RESET_<%=h.changeCase.constant(name)%> })

export function* watch<%=h.changeCase.pascal(name)%>() {
	yield takeLatest(GET_<%=h.changeCase.constant(name)%>, get<%=h.changeCase.pascal(name)%>Async)
}

export function* get<%=h.changeCase.pascal(name)%>Async() {
	// const { accessToken } = yield select(state => state.profile)
	try {
	} catch (e) {
		console.log(e, 'get<%=h.changeCase.pascal(name)%>Async ERROR')
	}
}
