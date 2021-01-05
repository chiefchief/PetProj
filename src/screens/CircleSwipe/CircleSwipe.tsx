import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import {channels} from './data';
import CircularSelection from './CircularSelection';

const CircleSwipe: React.FC<TProps> = () => {
  // CircleSwipe screen data.

  return (
    <SafeAreaView style={styles.container}>
      <CircularSelection channels={channels} />
    </SafeAreaView>
  );
};

export default CircleSwipe;

type TProps = {};
