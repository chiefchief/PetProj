/**
 * Inspiration: https://dribbble.com/shots/8257559-Movie-2-0
 *
 */
import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Image, Animated} from 'react-native';
import {getMovies} from './api';
import Genres from './Genres';
import Rating from './Rating';
import Backdrop from './Backdrop';
import styles, {EMPTY_ITEM_SIZE, ITEM_SIZE, SPACING} from './styles';
import Loading from './Loading';
import {bottom} from '@constants';

export default function App() {
  const [movies, setMovies] = useState<any[]>([]);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (movies.length === 0) {
      fetchMovies();
    }
  }, [movies]);

  const fetchMovies = async () => {
    try {
      const movieData = await getMovies();
      setMovies([{key: 'empty-left'}, ...movieData, {key: 'empty-right'}]);
    } catch (error) {
      console.log(error, 'ERROR');
    }
  };

  return movies.length === 0 ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <Backdrop movies={movies} scrollX={scrollX} />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.key}
        horizontal
        bounces={false}
        decelerationRate={'fast'}
        renderToHardwareTextureAndroid
        contentContainerStyle={{alignItems: 'flex-end'}}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: true})}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
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
        }}
      />
    </View>
  );
}
