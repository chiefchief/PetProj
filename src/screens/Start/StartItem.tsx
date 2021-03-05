import React, {useMemo, useRef, useState} from 'react';
import {Animated, Pressable, Text, View} from 'react-native';
import Video from 'react-native-video';
import {useTranslation} from '@hooks';
import {navigate} from '@services';
import {TScreenItem} from './data';
import styles from './styles';
import {animation} from '@helpers';

const StartItem: React.FC<TProps> = ({item}) => {
  const [paused, setPaused] = useState<boolean>(true);
  const animVal = useRef(new Animated.Value(0)).current;
  const {t} = useTranslation();

  const screenName = useMemo(() => item.screen.replace(/([a-z0-9])([A-Z])/g, '$1 $2'), [item]);
  const renderScreen = useMemo(() => (item.test ? t(screenName) + t(' _ (In Test)') : t(screenName)), [
    item.test,
    screenName,
    t,
  ]);
  const onPress = () => {
    if (paused) {
      animation();
      setPaused(false);
    }
    Animated.timing(animVal, {
      toValue: paused ? 1 : 0,
      useNativeDriver: true,
    }).start(() => {
      if (!paused) {
        animation();
        setPaused(true);
      }
    });
  };

  const leftTX = animVal.interpolate({inputRange: [0, 0.5, 1], outputRange: [-4, 2, -4]});
  const rightTX = animVal.interpolate({inputRange: [0, 0.5, 1], outputRange: [4, 2, 4]});
  const leftRotate = animVal.interpolate({inputRange: [0, 1], outputRange: ['30deg', '-30deg']});
  const rightRotate = animVal.interpolate({inputRange: [0, 1], outputRange: ['-30deg', '30deg']});

  return (
    <View>
      <Pressable
        disabled={item.progress}
        style={[styles.button, item.progress && styles.buttonDisabled]}
        onPress={() => navigate(item.screen)}
      >
        <Text style={styles.buttonTitle}>{renderScreen}</Text>
      </Pressable>
      <Pressable
        onPress={onPress}
        disabled={!item.video}
        style={[styles.videoButton, !item.video && styles.buttonDisabled]}
      >
        <View style={styles.arrowView}>
          <Animated.View style={[styles.arrowLine, {transform: [{rotate: leftRotate}, {translateX: leftTX}]}]} />
          <Animated.View style={[styles.arrowLine, {transform: [{rotate: rightRotate}, {translateX: rightTX}]}]} />
        </View>
        {!paused && item.video && (
          <Animated.View style={{transform: [{scale: animVal}]}}>
            <Video source={item.video} style={styles.video} repeat paused={paused} />
          </Animated.View>
        )}
      </Pressable>
    </View>
  );
};

export default StartItem;

type TProps = {
  item: TScreenItem;
};
