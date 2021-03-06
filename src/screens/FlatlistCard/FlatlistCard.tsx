/**
 *
 * Inspiration: https://dribbble.com/shots/3731362-Event-cards-iOS-interaction
 */

import React, {useEffect, useRef, useState} from 'react';
import {Image, FlatList, Animated, View} from 'react-native';

import {FlingGestureHandler, Directions, State, FlingGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import OverflowItems from './components/OverflowItems/OverflowItems';
import {flyerData} from './flyerData';
import styles, {VISIBLE_ITEMS} from './styles';

// https://www.creative-flyers.com

const FlatlistCard: React.FC = () => {
  const [data, setData] = useState(flyerData);
  const [globalIndex, setIndex] = useState(0);
  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;
  const setActiveIndex = (activeIndex: number) => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  };

  useEffect(() => {
    if (globalIndex === data.length - VISIBLE_ITEMS - 1) {
      const newData = [...data, ...data];
      setData(newData);
    }
  }, [globalIndex, data]);

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  const left = (ev: FlingGestureHandlerGestureEvent) => {
    if (ev.nativeEvent.state === State.END && globalIndex !== data.length - 1) {
      setActiveIndex(globalIndex + 1);
    }
  };
  const right = (ev: FlingGestureHandlerGestureEvent) => {
    if (ev.nativeEvent.state === State.END && globalIndex !== 0) {
      setActiveIndex(globalIndex - 1);
    }
  };

  return (
    <FlingGestureHandler key="left" direction={Directions.LEFT} onHandlerStateChange={left}>
      <FlingGestureHandler key="right" direction={Directions.RIGHT} onHandlerStateChange={right}>
        <View style={{flex: 1}}>
          <OverflowItems data={data} scrollXAnimated={scrollXAnimated} />
          <FlatList
            data={data}
            keyExtractor={(_, i) => String(i)}
            horizontal
            inverted
            contentContainerStyle={styles.contentContainerStyle}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({index, children, style, ...props}) => {
              const newStyle = [style, {zIndex: data.length - index}];
              return (
                <View style={newStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({item, index}) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({inputRange, outputRange: [50, 0, -100]});
              const scale = scrollXAnimated.interpolate({inputRange, outputRange: [0.8, 1, 1.3]});
              const opacity = scrollXAnimated.interpolate({inputRange, outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0]});

              return (
                <Animated.View style={[styles.imageView, {opacity, transform: [{translateX}, {scale}]}]}>
                  <Image source={{uri: item.poster}} style={styles.image} />
                </Animated.View>
              );
            }}
          />
        </View>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default FlatlistCard;
