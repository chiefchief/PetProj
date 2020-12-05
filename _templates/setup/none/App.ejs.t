---
to: src/App.tsx
unless_exists: true
---
import React from 'react';
import {StatusBar, View} from 'react-native';
import AppNavigator from './_AppNavigator/AppNavigator';

const App: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'transparent'} barStyle="light-content" translucent={true} />
      <AppNavigator />
    </View>
  );
};

export default App;
