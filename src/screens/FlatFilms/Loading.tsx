import {Text, View} from '@components';
import React from 'react';
import styles from './styles';

const Loading = () => (
  <View style={styles.loadingContainer}>
    <Text style={styles.paragraph}>Loading...</Text>
  </View>
);

export default Loading;
