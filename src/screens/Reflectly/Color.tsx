import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import {TapGestureHandler, TapGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';

const {width} = Dimensions.get('window');
export const COLOR_WIDTH = width / 3;
const RADIUS = 45;

const styles = StyleSheet.create({
  container: {
    width: COLOR_WIDTH,
    alignItems: 'center',
  },
  gradient: {
    borderRadius: RADIUS,
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderWidth: 6,
    borderColor: 'white',
  },
});

interface ColorProps {
  color: {
    start: string;
    end: string;
  };
  index: number;
  translateX: Animated.SharedValue<number>;
  onPress: (position: {x: number; y: number}) => void;
}

const Color = ({color, translateX, index, onPress}: ColorProps) => {
  const inputRange = [-COLOR_WIDTH * (index + 1), -COLOR_WIDTH * index, -COLOR_WIDTH * (index - 1)];
  const onGestureEvent = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onActive: ({absoluteX: x, absoluteY: y}) => {
      runOnJS(onPress)({x, y});
    },
  });
  const style = useAnimatedStyle(() => {
    const angle = interpolate(translateX.value, inputRange, [0, Math.PI / 2, Math.PI], Extrapolate.CLAMP);
    const translateY = 50 * Math.sin(angle);
    const scale = 1;
    return {
      transform: [{translateX: translateX.value}, {translateY}, {scale}],
    };
  });
  return (
    <Animated.View style={[styles.container, style]}>
      <TapGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={{flexDirection: 'column', alignItems: 'center'}}>
          <LinearGradient colors={[color.start, color.end]} style={styles.gradient} />
          <Text style={{marginLeft: 0, marginTop: 30, marginBottom: 30, transform: [{rotate: '-90deg'}]}}>
            {color.start}
          </Text>
        </Animated.View>
      </TapGestureHandler>
    </Animated.View>
  );
};

export default Color;
