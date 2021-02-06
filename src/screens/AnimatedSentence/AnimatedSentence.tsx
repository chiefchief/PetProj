import React from 'react';
import {View} from '@components';
import TextAnimator from './TextAnimation';
import styles from './styles';

const AnimatedSentence: React.FC<TProps> = () => {
  // AnimatedSentence screen data.

  return (
    <View style={styles.container}>
      <TextAnimator
        content={
          'For the things we have to learn before we can do them, we learn by doing them. ️️️️️️REACT NATIVE ❤️️️️'
        }
        textStyle={styles.textStyle}
      />
    </View>
  );
};

export default AnimatedSentence;

type TProps = {};
