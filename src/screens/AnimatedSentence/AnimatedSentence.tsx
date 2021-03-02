/**
 *
 * https://youtu.be/mwZPCA6Du5A
 *
 */

import React from 'react';
import {View} from '@components';
import TextAnimator from './TextAnimation';
import styles from './styles';

const AnimatedSentence: React.FC<TProps> = ({content}) => {
  return (
    <View style={styles.container}>
      <TextAnimator content={content} textStyle={styles.textStyle} />
    </View>
  );
};

AnimatedSentence.defaultProps = {
  content: 'For the things we have to learn before we can do them, we learn by doing them. ️️️️️️REACT NATIVE ❤️️️️',
};

export default AnimatedSentence;

type TProps = {
  content: string;
};
