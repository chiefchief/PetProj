import React from 'react';

import {FlatList, View} from '@components';
import {width, height} from '@constants';
import {Animated, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BACKDROP_HEIGHT, ITEM_SIZE} from './styles';

const Backdrop: React.FC<TProps> = ({movies, scrollX}) => {
  const keyExtractor = (item: any) => item.key + '-backdrop';

  return (
    <View style={{height: BACKDROP_HEIGHT, width, position: 'absolute'}}>
      <FlatList
        data={movies.reverse()}
        keyExtractor={keyExtractor}
        removeClippedSubviews={false}
        contentContainerStyle={{width, height: BACKDROP_HEIGHT}}
        renderItem={({item, index}) => {
          if (!item.backdrop) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 1) * ITEM_SIZE, index * ITEM_SIZE],
            outputRange: [0, width],
          });
          const imgTX = scrollX.interpolate({
            inputRange: [(index - 1) * ITEM_SIZE, index * ITEM_SIZE],
            outputRange: [0, -width],
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: 'absolute',
                width,
                transform: [{translateX}],
                height,
                overflow: 'hidden',
              }}
            >
              <Animated.Image
                source={{uri: item.backdrop}}
                style={{
                  transform: [{translateX: imgTX}],
                  width,
                  height: BACKDROP_HEIGHT,
                  position: 'absolute',
                }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient colors={['rgba(0, 0, 0, 0)', 'white']} style={StyleSheet.absoluteFillObject} />
    </View>
  );
};

export default Backdrop;

type TProps = {
  movies: any[];
  scrollX: Animated.Value;
};
