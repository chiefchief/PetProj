import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Start,
  ParalaxScroll,
  VideoCall,
  CountdownTimer,
  BottomSheet,
  StickyElement,
  AwesomeCarousel,
  FlatListItemAnimation,
  FlatGallery,
  // ADD NEW SCREEN
} from '@screens';
import {navigationRef, onStateChange} from '@services';

const InitialStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={'Start'} component={Start} />
      <AuthStack.Screen name={'ParalaxScroll'} component={ParalaxScroll} />
      <AuthStack.Screen name={'CountdownTimer'} component={CountdownTimer} options={{headerShown: false}} />
      <AuthStack.Screen name={'VideoCall'} component={VideoCall} />
      <AuthStack.Screen name={'BottomSheet'} component={BottomSheet} options={{headerShown: false}} />
      <AuthStack.Screen name={'StickyElement'} component={StickyElement} options={{headerShown: false}} />
      <AuthStack.Screen name={'AwesomeCarousel'} component={AwesomeCarousel} options={{headerShown: false}} />
      <AuthStack.Screen
        name={'FlatListItemAnimation'}
        component={FlatListItemAnimation}
        options={{headerShown: false}}
      />
      <AuthStack.Screen name={'FlatGallery'} component={FlatGallery} options={{headerShown: false}} />
      {/* <AuthStack.Screen name="ColorSelection" component={ColorSelection} options={{headerShown: false}} /> */}
    </AuthStack.Navigator>
  );
};

const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Start" component={Start} />
    </HomeStack.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      <InitialStack.Navigator screenOptions={{headerShown: false}}>
        {false ? (
          <InitialStack.Screen name="HomeNavigator" component={HomeNavigator} />
        ) : (
          <InitialStack.Screen name="AuthNavigator" component={AuthNavigator} />
        )}
      </InitialStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
