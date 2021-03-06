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
  FlatFilms,
  DotInversion,
  LongPress,
  AnimatedSentence,
  StopWatch,
  TabBar,
  FlatListAppearance,
  CustomSlider,
  GestureIteractions,
  SharedElement,
  DetailScreen,
  FlatlistCard,
  // ADD NEW SCREEN
} from '@screens';
import {navigationRef, onStateChange} from '@services';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const InitialStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const SharedStack = createSharedElementStackNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator tabBarOptions={{inactiveTintColor: 'blue'}} tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name={'ParalaxScroll'} component={ParalaxScroll} />
      <Tab.Screen name={'CountdownTimer'} component={CountdownTimer} />
      <Tab.Screen name={'AwesomeCarousel'} component={AwesomeCarousel} />
      <Tab.Screen name={'LongPress'} component={LongPress} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
const SharedStackNavigator: React.FC = () => {
  return (
    <SharedStack.Navigator
      initialRouteName="SharedElement"
      screenOptions={{
        gestureEnabled: false,
        cardStyleInterpolator: ({current: {progress}}) => ({
          cardStyle: {opacity: progress},
        }),
      }}
    >
      <SharedStack.Screen name={'SharedElement'} component={SharedElement} />
      <SharedStack.Screen name={'DetailScreen'} component={DetailScreen} />
    </SharedStack.Navigator>
  );
};

const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={'Start'} component={Start} />
      <AuthStack.Screen name={'ParalaxScroll'} component={ParalaxScroll} />
      <AuthStack.Screen name={'CountdownTimer'} component={CountdownTimer} />
      <AuthStack.Screen name={'VideoCall'} component={VideoCall} />
      <AuthStack.Screen name={'BottomSheet'} component={BottomSheet} options={{headerShown: false}} />
      <AuthStack.Screen name={'StickyElement'} component={StickyElement} options={{headerShown: false}} />
      <AuthStack.Screen name={'AwesomeCarousel'} component={AwesomeCarousel} />
      <AuthStack.Screen name={'FlatListItemAnimation'} component={FlatListItemAnimation} />
      <AuthStack.Screen name={'FlatGallery'} component={FlatGallery} />
      <AuthStack.Screen name={'FlatFilms'} component={FlatFilms} />
      <AuthStack.Screen name={'DotInversion'} component={DotInversion} />
      <AuthStack.Screen name={'LongPress'} component={LongPress} />
      <AuthStack.Screen name={'AnimatedSentence'} component={AnimatedSentence} />
      <AuthStack.Screen name={'StopWatch'} component={StopWatch} />
      <AuthStack.Screen name={'Tab'} component={TabNavigator} />
      <AuthStack.Screen name={'FlatListAppearance'} component={FlatListAppearance} />
      <AuthStack.Screen name={'CustomSlider'} component={CustomSlider} />
      <AuthStack.Screen name={'GestureIteractions'} component={GestureIteractions} />
      <AuthStack.Screen name={'FlatlistCard'} component={FlatlistCard} />
      <AuthStack.Screen name={'SharedStackNavigator'} component={SharedStackNavigator} options={{headerShown: false}} />
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
          <InitialStack.Screen name={'HomeNavigator'} component={HomeNavigator} />
        ) : (
          <InitialStack.Screen name={'AuthNavigator'} component={AuthNavigator} />
        )}
      </InitialStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
