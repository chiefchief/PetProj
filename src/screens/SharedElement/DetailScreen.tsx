import {Image} from '@components';
import {width} from '@constants';
import React from 'react';
import {View, Text} from 'react-native';
import {SharedElement, SharedElementsComponentConfig} from 'react-navigation-shared-element';
import styles from './styles';

const DetailScreen: MyComponent<any> = ({route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container1}>
      <SharedElement id={item.imageKey} style={{width, height: width}}>
        <Image style={styles.image1} source={item.image} />
      </SharedElement>
      <SharedElement id={item.textKey} style={styles.text1View}>
        <Text style={styles.text1}>{item.text}</Text>
      </SharedElement>
    </View>
  );
};

DetailScreen.sharedElements = (route) => {
  const {item} = route.params;
  return [
    {id: item.imageKey, animation: 'fade'},
    {id: item.textKey, animation: 'fade'},
  ];
};

export default DetailScreen;

type MyComponent<T> = React.FC<T> & {
  sharedElements?: SharedElementsComponentConfig;
};
