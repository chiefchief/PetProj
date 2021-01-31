import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Genres: React.FC<TProps> = ({genres}) => {
  const renderItem = (genre: string) => (
    <View key={genre} style={styles.genre}>
      <Text style={styles.genreText}>{genre}</Text>
    </View>
  );

  return <View style={styles.genres}>{genres.map(renderItem)}</View>;
};

export default Genres;

type TProps = {
  genres: string[];
};
