import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {transformOrigin} from 'react-native-redash';
import ChannelIcon from './ChannelIcon';
import {TItem} from './data';
import PanGesture from './PanGesture';

const {interpolate} = Animated;
const {width} = Dimensions.get('window');
const height = width;
const innerR = 320;
const styles = StyleSheet.create({
  container: {
    width,
    height: width,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    transform: [{rotate: '-90deg'}],
  },
  viewSt: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderColor: '#000',
    borderWidth: 1,
  },
});

interface CircularSelectionProps {
  channels: TItem[];
}

export default ({channels}: CircularSelectionProps) => {
  const l = Math.sin(Math.PI);
  const r = (innerR * Math.sin(Math.PI / 20)) / (1 - l);
  const R = innerR + 2 * r;
  const cx = width / 2 - r;
  const cy = R - r;
  const index = new Animated.Value(0);
  const isActive = new Animated.Value(0);
  const segment = (2 * Math.PI) / channels.length;
  const rotateZ = interpolate(index, {
    inputRange: [0, channels.length],
    outputRange: [0, -2 * Math.PI],
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: transformOrigin(0, R - height / 2, {rotateZ}),
        }}
      >
        {channels.map((item, i) => {
          return (
            <View
              key={`${i}`}
              style={[
                styles.viewSt,
                {
                  transform: [{translateX: cx}, {translateY: cy}, {rotateZ: `${i * segment}rad`}, {translateY: -cy}],
                },
              ]}
            >
              <ChannelIcon {...item} radius={r} />
            </View>
          );
        })}
      </Animated.View>
      <PanGesture ratio={width / channels.length} length={channels.length} {...{index, isActive}} />
    </View>
  );
};
