import React from 'react';
import {useTranslation} from '@hooks';
import {View, Text} from '@components';
import styles from './styles';
import {Pressable} from 'react-native';
import {navigate} from '@services';

const Start: React.FC<TProps> = () => {
  // Start screen data.
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => navigate('ParalaxScroll')}>
        <Text style={styles.buttonTitle}>{t('Paralax FlatList')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('VideoCall')}>
        <Text style={styles.buttonTitle}>{t('Video Call')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('CountdownTimer')}>
        <Text style={styles.buttonTitle}>{t('Countdown Timer')}</Text>
      </Pressable>
    </View>
  );
};

export default Start;

type TProps = {};
