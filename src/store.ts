import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './reducers/sagas';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  timeout: 10000,
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['_persisted'], // ADD WHITE LIST IF YOU NEED
};

const persistedReducer = persistReducer(persistConfig, reducers);

const storeCreation: TStore = () => {
  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return {store, persistor};
};

export default storeCreation();

type TStore = () => {
  store: any;
  persistor: any;
};
