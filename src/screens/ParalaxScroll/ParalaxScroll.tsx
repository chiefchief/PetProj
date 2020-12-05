import React, {useRef} from 'react';
import {Animated, Image} from 'react-native';
import {View} from '@components';
import styles from './styles';
import {width} from '@constants';

const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const images = [
  'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80',
  'https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80',
  'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80',
  'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  'https://images.unsplash.com/photo-1517957754642-2870518e16f8?w=800&q=80',
  'https://images.unsplash.com/photo-1546484959-f9a381d1330d?w=800&q=80',
  'https://images.unsplash.com/photo-1548761208-b7896a6ff225?w=800&q=80',
  'https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?w=800&q=80',
  'https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&q=80',
  'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
];

const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
  avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 40)}.jpg`,
}));

const ParalaxScroll: React.FC<TProps> = () => {
  // ParalaxScroll screen data.
  const scrollX = useRef(new Animated.Value(0)).current;

  const keyExtractor = (item) => item.key;
  const renderItem = ({item, index}) => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const translateX = scrollX.interpolate({
      inputRange,
      // outputRange: [-width, 0, width],
      outputRange: [-width * 0.7, 0, width * 0.7],
    });
    return (
      <View style={styles.itemView}>
        <View style={styles.itemInsideView}>
          <View
            style={{width: ITEM_WIDTH, height: ITEM_HEIGHT, overflow: 'hidden', alignItems: 'center', borderRadius: 12}}
          >
            <Animated.Image
              source={{uri: item.photo}}
              style={{width: ITEM_WIDTH * 1.4, height: ITEM_HEIGHT, transform: [{translateX}]}}
            />
          </View>
          <Image source={{uri: item.avatar_url}} style={styles.avatar} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: true})}
      />
    </View>
  );
};

export default ParalaxScroll;

type TProps = {};

// const renderItem = ({item, index}) => (
//   <View
//     style={{
//       width,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 18,
//       borderWidth: 10,
//       borderColor: 'white',
//       shadowColor: '#000',
//       shadowOpacity: 1,
//       shadowRadius: 20,
//       shadowOffset: {
//         width: 0,
//         height: 0,
//       },
//     }}
//   >
//     <View style={{width: ITEM_WIDTH, height: ITEM_HEIGHT, overflow: 'hidden', alignItems: 'center'}}>
//       <Image source={{uri: item.photo}} style={{width: ITEM_WIDTH * 1.4, height: ITEM_HEIGHT}} />
//     </View>
//     <Image source={{uri: item.avatar_url}} style={{width: 60, height: 60, borderRadius: 60}} />
//   </View>
// ); // LOOKS COOL
