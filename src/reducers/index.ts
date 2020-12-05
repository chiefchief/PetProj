import {combineReducers} from 'redux';

export default combineReducers({
  _global: require('./_global').default,
  _persisted: require('./_persisted').default,
  // ADD NEW REDUCER
});
