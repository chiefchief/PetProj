// USES FOR GLOBAL NOT PERSISTED ITEMS
import {takeLatest} from 'redux-saga/effects';
import {INITIAL_GLOBAL} from './__proto__';

const LOG_OUT = '[_persisted] LOG_OUT';
const LOG_IN = '[_persisted] LOG_IN';
const SET_LOADER = '[_global] SET_LOADER';
const RESET_GLOBAL = '[_global] RESET_GLOBAL';

const initialstate = new INITIAL_GLOBAL();

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_LOADER:
      return new INITIAL_GLOBAL({...state, loader: action.loader});
    case RESET_GLOBAL:
      return initialstate;
    default:
      return state;
  }
};

export const logOut = () => ({type: LOG_OUT});
export const logIn = () => ({type: LOG_IN});
export const setLoader = (loader: string) => ({loader, type: SET_LOADER});
export const resetGlobal = () => ({type: RESET_GLOBAL});

export function* watch_global() {
  yield takeLatest(LOG_OUT, logOutAsync);
  yield takeLatest(LOG_IN, logInAsync);
}

export function* logOutAsync() {
  console.log('logOutAsync');
}

export function* logInAsync() {
  try {
    // yield all([call(logOutAsync), call(logOut)]);
    // yield navigate('Home');
  } catch (e) {
    console.log(e, 'logInAsync ERROR');
  }
}
