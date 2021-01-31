/**
 *
 * https://github.com/wcandillon/can-it-be-done-in-react-native/tree/master/the-10-min/src/TapGesture
 *
 */

import React from 'react';
import {View} from '@components';
import styles from './styles';
import {State, TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {Value, cond, eq} from 'react-native-reanimated';
import {mix, onGestureEvent, withTransition} from 'react-native-redash';
import Button from './Button';

const LongPress: React.FC<TProps> = () => {
  const state = new Value(State.UNDETERMINED);
  const gestureHandler = onGestureEvent({state});
  const isActive = eq(state, State.BEGAN);
  const duration = cond(isActive, 2000, 250);
  const progress = withTransition(isActive, {duration});
  const scale = mix(progress, 1, 1.2);

  return (
    <View style={styles.container}>
      <TapGestureHandler {...gestureHandler}>
        <Animated.View style={{transform: [{scale}]}}>
          <Button {...{progress}} />
        </Animated.View>
      </TapGestureHandler>
    </View>
  );
};

export default LongPress;

type TProps = {};
