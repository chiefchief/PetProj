/**
 *
 * https://github.com/catalinmiron/react-native-dot-inversion/blob/master/App.js
 *
 */

import React from 'react';
import {StatusBar, Animated, Text, View} from 'react-native';
import {width} from '@constants';
import styles from './styles';
import {colorsData, quotesData} from './quotesData';
import Circle from './Circle';

const DURATION = 1000;
const TEXT_DURATION = DURATION * 0.8;

/* 
initialBgColor -> Big background of the element
bgColor -> initial circle bg color that will be the next slide initial BG Color
nextBgColor -> next circle bg color after we fully transition the circle and this will be small again
prev bgColor === next initialBgColor
prev nextBgColor === next bgColor
*/

const DotInversion: React.FC = () => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const animatedValue2 = React.useRef(new Animated.Value(0)).current;
  const sliderAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [...Array(quotesData.length).keys()];
  const [index, setIndex] = React.useState(0);

  const animate = (i: number) =>
    Animated.parallel([
      Animated.timing(sliderAnimatedValue, {
        toValue: i,
        duration: TEXT_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: false,
      }),
    ]);

  const onPress = () => {
    animatedValue.setValue(0);
    animatedValue2.setValue(0);
    animate((index + 1) % colorsData.length).start();
    setIndex((index + 1) % colorsData.length);
  };

  return (
    <View style={{flex: 1, justifyContent: 'flex-start', paddingTop: 100}}>
      <StatusBar hidden />
      <Circle index={index} onPress={onPress} animatedValue={animatedValue} animatedValue2={animatedValue2} />
      <Animated.View
        style={{
          flexDirection: 'row',
          transform: [
            {
              translateX: sliderAnimatedValue.interpolate({
                inputRange,
                outputRange: quotesData.map((_, i) => -i * width * 2),
              }),
            },
          ],
          opacity: sliderAnimatedValue.interpolate({
            inputRange: [...Array(quotesData.length * 2 + 1).keys()].map((i) => i / 2),
            outputRange: [...Array(quotesData.length * 2 + 1).keys()].map((i) => (i % 2 === 0 ? 1 : 0)),
          }),
        }}
      >
        {quotesData.slice(0, colorsData.length).map(({quote, author}, i) => {
          return (
            <View style={{paddingRight: width, width: width * 2}} key={i}>
              <Text style={[styles.paragraph, {color: colorsData[i].nextBgColor}]}>{quote}</Text>
              <Text
                style={[
                  styles.paragraph,
                  {
                    color: colorsData[i].nextBgColor,
                    fontSize: 10,
                    fontWeight: 'normal',
                    textAlign: 'right',
                    opacity: 0.8,
                  },
                ]}
              >
                ______ {author}
              </Text>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default DotInversion;
