// Inspiration: https://dribbble.com/shots/2343572-Countdown-timer
// 👉 Output of the code: https://twitter.com/mironcatalin/status/1321856493382238208

import {height, width} from '@constants';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Vibration, TextInput, Animated, TouchableOpacity, View, StyleSheet} from 'react-native';

const colors = {
  black: '#323F4E',
  red: '#F76A6A',
  text: '#ffffff',
};

const timers = [...Array(13).keys()].map((i) => (i === 0 ? 1 : i * 5));
const ITEM_SIZE = width * 0.38;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;

const CountdownTimer: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const timerAnimation = useRef(new Animated.Value(height)).current;
  const buttonAnimation = useRef(new Animated.Value(0)).current;
  const textInputAnimation = useRef(new Animated.Value(timers[0])).current;
  const inputRef = useRef<TextInput>(null);
  const [duration, setDuration] = useState(timers[0]);

  useEffect(() => {
    const listener = textInputAnimation.addListener(({value}) => {
      inputRef?.current?.setNativeProps({
        text: Math.ceil(value).toString(),
      });
    });
    return () => {
      textInputAnimation.removeListener(listener);
      textInputAnimation.removeAllListeners();
    };
  });

  const animation = useCallback(() => {
    textInputAnimation.setValue(duration);
    Animated.sequence([
      Animated.timing(buttonAnimation, {
        toValue: 1,
        duration: 240,
        useNativeDriver: true,
      }),
      Animated.timing(timerAnimation, {
        toValue: 0,
        duration: 240,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(textInputAnimation, {
          toValue: 0,
          duration: duration * 1000,
          useNativeDriver: true,
        }),
        Animated.timing(timerAnimation, {
          toValue: height,
          duration: duration * 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(320),
    ]).start(() => {
      Vibration.cancel();
      Vibration.vibrate();
      textInputAnimation.setValue(duration);
      Animated.timing(buttonAnimation, {
        toValue: 0,
        duration: 240,
        useNativeDriver: true,
      }).start();
    });
  }, [buttonAnimation, duration, textInputAnimation, timerAnimation]);

  const opacity = buttonAnimation.interpolate({inputRange: [0, 1], outputRange: [1, 0]});
  const translateY = buttonAnimation.interpolate({inputRange: [0, 1], outputRange: [0, 200]});
  const textOpacity = buttonAnimation.interpolate({inputRange: [0, 1], outputRange: [0, 1]});

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            width,
            height,
            transform: [{translateY: timerAnimation}],
            backgroundColor: colors.red,
          },
        ]}
      />
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 100,
            transform: [{translateY}],
            opacity,
          },
        ]}
      >
        <TouchableOpacity onPress={animation}>
          <View style={styles.roundButton} />
        </TouchableOpacity>
      </Animated.View>
      <View
        style={{
          position: 'absolute',
          top: height / 3,
          left: 0,
          right: 0,
          flex: 1,
        }}
      >
        <Animated.View
          style={{
            width: ITEM_SIZE,
            position: 'absolute',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            opacity: textOpacity,
          }}
        >
          <TextInput ref={inputRef} style={styles.text} defaultValue={duration.toString()} />
        </Animated.View>
        <Animated.FlatList
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: true})}
          onMomentumScrollEnd={(ev) => {
            const index = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
            setDuration(timers[index]);
          }}
          data={timers}
          horizontal
          bounces={false}
          snapToInterval={ITEM_SIZE}
          decelerationRate={'fast'} // или 0 (НУЖНО ДЛЯ СКРОЛА К ЭЕЛЕМЕНТУ ИДЕТ В ПАРЕ С ПАРАМЕТРОМ ВЫШЕ)
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.toString()}
          style={{flexGrow: 0, opacity}} // НЕ ЗНАЮ ЗАЧЕМ
          contentContainerStyle={{paddingHorizontal: ITEM_SPACING}} // ОТСТУПЫ ВНАЧАЛЕ И ВКОНЦЕ
          renderItem={({item, index}) => {
            const inputRange = [(index - 1) * ITEM_SIZE, index * ITEM_SIZE, (index + 1) * ITEM_SIZE];
            const opacity = scrollX.interpolate({inputRange, outputRange: [0.4, 1, 0.4]});
            const scale = scrollX.interpolate({inputRange, outputRange: [0.4, 1, 0.4]});
            return (
              <View style={{width: ITEM_SIZE, justifyContent: 'center', alignItems: 'center'}}>
                <Animated.Text style={[styles.text, {opacity, transform: [{scale}]}]}>{`${item}`}</Animated.Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CountdownTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  roundButton: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: colors.red,
  },
  text: {
    fontSize: ITEM_SIZE * 0.8,
    fontFamily: 'Menlo',
    color: colors.text,
    fontWeight: '900',
  },
});
