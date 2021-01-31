/**
 *
 * Inspiration: https://dribbble.com/shots/8257559-Movie-2-0
 *
 */
import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Animated} from 'react-native';
import {getMovies} from './api';
import Backdrop from './Backdrop';
import styles, {ITEM_SIZE} from './styles';
import FilmItem from './FilmItem';

const FlatFilms: React.FC = () => {
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

  const keyExtractor = (item: any) => item.key;
  const renderItem = (props: any) => <FilmItem {...props} scrollX={scrollX} />;

  return movies.length !== 0 ? (
    <View style={styles.container}>
      <Backdrop movies={movies} scrollX={scrollX} />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={keyExtractor}
        horizontal
        bounces={false}
        decelerationRate={'fast'}
        renderToHardwareTextureAndroid
        contentContainerStyle={styles.contentContainerStyle}
        snapToInterval={ITEM_SIZE}
        // snapToAlignment={'start'}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: true})}
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
    </View>
  ) : (
    <View style={styles.loadingContainer}>
      <Text style={styles.paragraph}>Loading...</Text>
    </View>
  );
};

export default FlatFilms;
