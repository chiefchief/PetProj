/**
 *
 * https://youtu.be/6LsLgHeX500
 *
 * https://yqnn.github.io/svg-path-editor/
 *
 */

import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, View, Animated} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import styles, {backgroundColor, height} from './styles';
import StaticTabbar from './Tab';
import {width} from '@constants';
import {createPath} from './createPath';
// import {getPath} from './getPath';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
// const tabs = [{name: 'grid'}, {name: 'list'}, {name: 'repeat'}, {name: 'map'}, {name: 'user'}];
const tabs = [{name: 'grid'}, {name: 'repeat'}, {name: 'user'}];
const tabWidth = width / tabs.length;

// const d = getPath(tabs);
const d = createPath(tabs);

const TabBar: React.FC<TProps> = () => {
  const value = useRef(new Animated.Value(0)).current;

  const translateX = value.interpolate({
    inputRange: [0, width],
    outputRange: [-width + tabWidth, tabWidth],
  });
  return (
    <View style={styles.container}>
      <View style={styles.container} />
      <View {...{height, width}}>
        <AnimatedSvg
          width={width + (width / tabs.length) * (tabs.length - 1)}
          {...{height}}
          style={{transform: [{translateX}]}}
        >
          <Path fill={backgroundColor} d={d} />
        </AnimatedSvg>
        <View style={StyleSheet.absoluteFill}>
          <StaticTabbar {...{tabs, value}} />
        </View>
      </View>
      <SafeAreaView style={styles.bottom} />
    </View>
  );
};

export default TabBar;
type TProps = {};
