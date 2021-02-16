/**
 *
 * https://youtu.be/6LsLgHeX500
 *
 * https://yqnn.github.io/svg-path-editor/
 *
 */

import React, {useEffect, useMemo, useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Animated} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import styles, {backgroundColor, tabHeight} from './styles';
import {width} from '@constants';
import {createPath} from './createPath';
import {BottomTabBarOptions, BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {TouchableWithoutFeedback} from 'react-native';
import {Icon} from '@components';
// import {getPath} from './getPath';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const TabBar: React.FC<BottomTabBarProps<BottomTabBarOptions>> = (props) => {
  const [values, setValues] = useState<Animated.Value[]>([]);
  const value = useRef(new Animated.Value(0)).current;
  const d = useMemo(() => createPath(props.state.routes), [props.state.routes]);

  const tabWidth = useMemo(() => width / props.state.routes.length, [props.state.routes]);

  useEffect(() => {
    const resArray = props.state.routes.map((_: any, index: number) => new Animated.Value(index === 0 ? 1 : 0));
    setValues(resArray);
  }, [props.state.routes]);

  const onPress = (index: number) => {
    Animated.sequence([
      Animated.parallel(
        values.map((v) =>
          Animated.timing(v, {
            toValue: 0,
            duration: 124,
            useNativeDriver: true,
          }),
        ),
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true,
        }),
        Animated.spring(values[index], {
          delay: 48,
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  const translateX = value.interpolate({
    inputRange: [0, width],
    outputRange: [-width + tabWidth, tabWidth],
  });

  return (
    <View>
      <AnimatedSvg
        width={width + (width / props.state.routes.length) * (props.state.routes.length - 1)}
        height={tabHeight}
        style={{transform: [{translateX}]}}
      >
        <Path fill={backgroundColor} d={d} />
      </AnimatedSvg>
      <View style={[StyleSheet.absoluteFill, {flexDirection: 'row'}]}>
        {values.map((item, key) => {
          const translateY = item.interpolate({
            inputRange: [0, 0.75, 1],
            outputRange: [0, -48, -32],
          });

          return (
            <TouchableWithoutFeedback {...{key}} onPress={() => onPress(key)}>
              <Animated.View
                style={[
                  styles.iconView,
                  {
                    left: tabWidth * key + (tabWidth - 40) / 2,
                    transform: [{translateY}],
                  },
                ]}
              >
                <Icon name={'check-circle'} color="black" size={25} />
              </Animated.View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      <SafeAreaView style={styles.bottom} />
    </View>
  );
};

export default TabBar;
