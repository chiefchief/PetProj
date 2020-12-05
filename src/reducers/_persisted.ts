import {INITIAL_PERSISTED} from './__proto__';

const CHANGE_TOKEN = '[_persisted] CHANGE_SPLASH';
const RESET_PERSISTED = '[_persisted] RESET_PERSISTED';

const initialstate = new INITIAL_PERSISTED();

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case CHANGE_TOKEN:
      return new INITIAL_PERSISTED({...state, token: action.token});
    case RESET_PERSISTED:
      return initialstate;
    default:
      return state;
  }
};

export const changeToken = (token: string) => ({token, type: CHANGE_TOKEN});

export function* watch_persisted() {
  // yield takeLatest(LOG_OUT, logOutAsync);
}
