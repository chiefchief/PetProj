import React, {useRef} from 'react';
import {useState, useCallback, useHeaderHeight} from '@hooks';
import {View} from '@components';
import {Animated, ColorValue, GestureResponderEvent} from 'react-native';
import styles, {POINT_SIZE} from './styles';
import {PanGestureHandler, PanGestureHandlerStateChangeEvent, State} from 'react-native-gesture-handler';

import {randomColor} from './randomColor';
import {throttle} from 'lodash';

const GestureIteractions: React.FC = () => {
  const animationRef = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const animValue = useRef(new Animated.Value(0)).current;
  const [mainColor, setMainColor] = useState<ColorValue>('#777777');
  const [nextColor, setNextColor] = useState<ColorValue>(randomColor);
  const hh = useHeaderHeight();

  const onGestureEv = Animated.event([{nativeEvent: {x: animationRef.x, y: animationRef.y}}], {
    useNativeDriver: true,
  });

  const onHandlerStateChange = (e: PanGestureHandlerStateChangeEvent) => {
    if (e.nativeEvent.state === State.END) {
      onTouchEnd(nextColor);
    }
  };

  const onTouchEnd = useCallback(
    throttle(
      (nc) =>
        Animated.timing(animValue, {toValue: 1, duration: 720, useNativeDriver: true}).start(() => {
          setMainColor(nc);
          Animated.timing(animValue, {toValue: 0, duration: 1, useNativeDriver: true}).start(() => {
            setNextColor(randomColor);
          });
        }),
      800,
      {trailing: false},
    ),
    [],
  );

  const onTouchStart = (e: GestureResponderEvent) => {
    animationRef.setValue({x: e.nativeEvent.pageX, y: e.nativeEvent.pageY - hh});
  };

  const TY = animationRef.y.interpolate({
    inputRange: [0, 30, 40],
    outputRange: [0 - POINT_SIZE / 2, 30 - POINT_SIZE / 2, 40 - POINT_SIZE / 2],
  });
  const TX = animationRef.x.interpolate({
    inputRange: [0, 30, 40],
    outputRange: [0 - POINT_SIZE / 2, 30 - POINT_SIZE / 2, 40 - POINT_SIZE / 2],
  });
  const scale = animValue.interpolate({inputRange: [0, 1], outputRange: [0, 32]});

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEv} onHandlerStateChange={onHandlerStateChange}>
        <Animated.View
          style={[styles.container, {backgroundColor: mainColor}]}
          onTouchEnd={() => onTouchEnd(nextColor)}
          onTouchStart={onTouchStart}
        >
          <Animated.View
            style={[
              styles.point,
              {backgroundColor: nextColor, transform: [{translateY: TY}, {translateX: TX}, {scale}]},
            ]}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default GestureIteractions;
