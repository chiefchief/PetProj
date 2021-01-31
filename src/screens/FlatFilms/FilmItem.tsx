import {Image, Text} from '@components';
import {bottom} from '@constants';
import React from 'react';
import {Animated, View} from 'react-native';
import Genres from './Genres';
import Rating from './Rating';
import styles, {EMPTY_ITEM_SIZE, ITEM_SIZE, SPACING} from './styles';

const FilmItem: React.FC<TProps> = ({item, index, scrollX}) => {
  if (!item.poster) {
    return <View style={{width: EMPTY_ITEM_SIZE}} />;
  }

  const inputRange = [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE, index * ITEM_SIZE];

  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [0, -50, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={{width: ITEM_SIZE, marginBottom: bottom || 24}}>
      <Animated.View
        style={{
          marginHorizontal: SPACING,
          padding: SPACING * 2,
          alignItems: 'center',
          transform: [{translateY}],
          backgroundColor: 'white',
          borderRadius: 32,
        }}
      >
        <Image source={{uri: item.poster}} style={styles.posterImage} />
        <Text style={{fontSize: 24}} numberOfLines={1}>
          {item.title}
        </Text>
        <Rating rating={item.rating} />
        <Genres genres={item.genres} />
        <Text style={{fontSize: 12}} numberOfLines={3}>
          {item.description}
        </Text>
      </Animated.View>
    </View>
  );
};

export default FilmItem;

type TProps = {
  item: any;
  index: number;
  scrollX: Animated.Value;
};
