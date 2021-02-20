import React, {useRef} from 'react';
import {View, Text, Image} from '@components';
import styles from './styles';
import {width} from '@constants';
import {Animated, ColorValue, FlatList, Pressable} from 'react-native';

const data: TItem[] = [
  {
    id: '1',
    icon: require('./assets/imac.png'),
    title: 'First Slide',
    subtitle: 'first slide subtitle',
    bg: 'lightblue',
  },
  {
    id: '2',
    icon: require('./assets/brain.png'),
    title: 'Second Slide',
    subtitle: 'second slide subtitle',
    bg: 'pink',
  },
  {
    id: '3',
    icon: require('./assets/rocket.png'),
    title: 'Third Slide',
    subtitle: 'third slide subtitle',
    bg: 'gray',
  },
  {
    id: '4',
    icon: require('./assets/watermelon.png'),
    title: 'Fourth Slide',
    subtitle: 'fourth slide subtitle',
    bg: 'orange',
  },
];

const CustomSlider: React.FC<TProps> = () => {
  // CustomSlider screen data.
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<FlatList<TItem>>(null);

  const renderItem = () => <View style={styles.itemView} />;
  const keyExtractor = (item: TItem) => item.id;

  const renderInside = (item: TItem, index: number) => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const opacity = scrollX.interpolate({inputRange, outputRange: [0, 1, 0]});
    const translateY = scrollX.interpolate({inputRange, outputRange: [240, 0, -240]});
    return (
      <Animated.View key={item.id} style={[styles.item, {opacity, transform: [{translateY}]}]}>
        <Image source={item.icon} style={styles.icon} />
        <Text>{item.title}</Text>
        <Text>{item.subtitle}</Text>
      </Animated.View>
    );
  };

  const renderPag = (item: TItem, index: number) => {
    // const inputRange = [index * width, (index + 1) * width];
    // const scale = scrollX.interpolate({inputRange, outputRange: [20, 1], extrapolate: 'clamp'});
    const inputRange = [(index - 1) * width, index * width];
    const scale = scrollX.interpolate({inputRange, outputRange: [1, 160], extrapolate: 'clamp'});
    return (
      <Animated.View
        key={item.id}
        style={{
          ...styles.point,
          backgroundColor: item.bg,
          transform: [{scale}],
        }}
      />
    );
  };

  const renderPagButton = (item: TItem, index: number) => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const opacity = scrollX.interpolate({inputRange, outputRange: [0, 1, 0], extrapolate: 'clamp'});

    return (
      <Pressable key={item.id} onPress={() => scrollRef.current?.scrollToIndex({animated: true, index})}>
        <Animated.View
          style={{
            ...styles.point,
            backgroundColor: 'black',
          }}
        />
        <Animated.View style={[styles.point, {position: 'absolute', backgroundColor: 'white', opacity}]} />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.paginationView}>{data.map(renderPag)}</View>
      {data.map(renderInside)}
      <Animated.FlatList
        ref={scrollRef}
        horizontal
        pagingEnabled
        decelerationRate={'fast'}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: true})}
      />
      <View style={styles.paginationView}>{data.map(renderPagButton)}</View>
    </View>
  );
};

export default CustomSlider;

type TProps = {};

export type TItem = {
  id: string;
  icon: number;
  title: string;
  subtitle: string;
  bg: ColorValue;
};
