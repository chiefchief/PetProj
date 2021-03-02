/**
 * to implement
 * https://dribbble.com/shots/14012443-Volkswagen-App-Concept-Models
 *
 */

import {navigate} from '@services';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import styles from './styles';

const item = {
  imageKey: 'imageUnique',
  textKey: 'textUnique',
  image: require('./theboys.jpg'),
  text: 'The Boys',
};

const SharedElementScreen: React.FC = () => {
  return (
    <View style={styles.container1}>
      <TouchableOpacity onPress={() => navigate('DetailScreen', {item})}>
        <SharedElement style={styles.image} id={item.imageKey}>
          <Image style={styles.image} source={item.image} />
        </SharedElement>
        <SharedElement id={item.textKey}>
          <Text>{item.text}</Text>
        </SharedElement>
      </TouchableOpacity>
    </View>
  );
};

export default SharedElementScreen;
