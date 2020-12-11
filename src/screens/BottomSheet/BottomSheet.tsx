import React, {useRef} from 'react';
import {View, Text, Image} from '@components';
import {Animated, StyleSheet} from 'react-native';
import {height, width} from '@constants';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
// BOTTOM SHEET PACKAGE - https://github.com/gorhom/react-native-bottom-sheet
const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;
const DOT_SIZE = 8;

const images = [
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128',
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993',
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015',
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369',
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445',
];

const product = {
  title: 'SOFT MINI CROSSBODY BAG WITH KISS LOCK',
  description: [
    'Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.',
    'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"',
  ],
  price: '29.99£',
};

const BottomSheetScreen: React.FC<TProps> = () => {
  // BottomSheet screen data.
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1}}>
      <View style={{height: ITEM_HEIGHT, overflow: 'hidden'}}>
        <Animated.FlatList
          data={images}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({item}) => <Image source={{uri: item}} style={styles.image} />}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate={'fast'}
          showsVerticalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {useNativeDriver: true})}
          // scrollEventThrottle={16}
        />
        <View style={styles.pagination}>
          {images.map((_, index) => {
            return <View key={`${index}`} style={[styles.dot]} />;
          })}
          <Animated.View
            style={[
              styles.dotIndicator,
              {
                transform: [
                  {
                    translateY: Animated.divide(scrollY, ITEM_HEIGHT).interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, DOT_SIZE * 2],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      </View>
      <BottomSheet snapPoints={[height - ITEM_HEIGHT, height]} initialSnapIndex={0}>
        <BottomSheetScrollView style={{backgroundColor: 'white'}}>
          <Text>{product.title}</Text>
          <Text>{product.price}</Text>
          <View>
            {product.description.map((text, index) => (
              <Text key={index}>{text}</Text>
            ))}
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default BottomSheetScreen;

type TProps = {};

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  pagination: {
    position: 'absolute',
    top: ITEM_HEIGHT / 2,
    left: 20,
  },
  dot: {
    width: DOT_SIZE,
    aspectRatio: 1,
    borderRadius: DOT_SIZE,
    backgroundColor: '#333',
    marginBottom: DOT_SIZE,
  },
  dotIndicator: {
    width: DOT_SIZE * 2,
    aspectRatio: 1,
    borderRadius: DOT_SIZE,
    borderWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
  },
});
