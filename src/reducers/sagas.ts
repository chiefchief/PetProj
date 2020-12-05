import {all} from 'redux-saga/effects';
import {watch_global} from './_global';
import {watch_persisted} from './_persisted';
// ADD IMPORT

export default function* rootSaga() {
  yield all([
    watch_global(),
    watch_persisted(),
    // ADD WATCHER
  ]);
}
