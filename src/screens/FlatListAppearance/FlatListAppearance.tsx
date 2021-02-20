import React from 'react';
import {useState} from '@hooks';
import {View, Text} from '@components';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import {Animated, Pressable} from 'react-native';
import {height} from '@constants';

const INITIAL_DATA = [
  {name: '1'},
  {name: '2'},
  {name: '3'},
  {name: '4'},
  {name: '5'},
  {name: '6'},
  {name: '7'},
  {name: '8'},
].map((item) => ({...item, animation: new Animated.Value(0)}));

const FlatListAppearance: React.FC<TProps> = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const renderItem = ({item, index}: {item: any; index: number}) => {
    Animated.spring(item.animation, {
      delay: index * 48,
      toValue: 1,
      useNativeDriver: true,
      // overshootClamping?: boolean;
      // restDisplacementThreshold?: number;
      // restSpeedThreshold?: number;
      velocity: 0, // default 0 initial speed
      // TOGETHER (useless part)
      bounciness: 8, // default 8
      speed: 12, // default 12
      // TOGETHER
      // tension: 40, // default 40 ... speed
      // friction: 1, // default 7 ... bouncess ass less as more
      // TOGETHER
      // stiffness: 100, // Default 100 ... speed
      // mass: 1, // Default 1 ... mass
      // damping: 10, // Default 10 ... springiness
    }).start();
    const translateY = () => item.animation.interpolate({inputRange: [0, 1], outputRange: [height, 0]});
    return (
      <Animated.View style={[styles.item, {transform: [{translateY: translateY()}]}]}>
        <Text>{item.name}</Text>
      </Animated.View>
    );
  };
  const keyExtractor = (item: any) => item.name;

  const restart = () => {
    setData([]);
    setTimeout(() => {
      setData(INITIAL_DATA);
    }, 100);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={restart}>
        <Text>{'Restart'}</Text>
      </Pressable>
      <FlatList style={styles.container} data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default FlatListAppearance;

type TProps = {};
