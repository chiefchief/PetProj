import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './_AppNavigator/AppNavigator';
import {Provider} from 'react-redux';
import storage from './store';
import {PersistGate} from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <Provider store={storage.store}>
      <PersistGate loading={null} persistor={storage.persistor}>
        <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent={true} />
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
