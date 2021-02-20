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
      <Pressable style={styles.button} onPress={() => navigate('CountdownTimer')}>
        <Text style={styles.buttonTitle}>{t('Countdown Timer')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('BottomSheet')}>
        <Text style={styles.buttonTitle}>{t('Bottom Sheet')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('StickyElement')}>
        <Text style={styles.buttonTitle}>{t('Sticky Element')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('AwesomeCarousel')}>
        <Text style={styles.buttonTitle}>{t('Awesome Carousel')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('FlatListItemAnimation')}>
        <Text style={styles.buttonTitle}>{t('FlatList Item Animation')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('FlatGallery')}>
        <Text style={styles.buttonTitle}>{t('Flat Gallery')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('FlatFilms')}>
        <Text style={styles.buttonTitle}>{t('Flat Films')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('DotInversion')}>
        <Text style={styles.buttonTitle}>{t('Dot Inversion')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('LongPress')}>
        <Text style={styles.buttonTitle}>{t('Long Press')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('AnimatedSentence')}>
        <Text style={styles.buttonTitle}>{t('Animated Sentence')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('StopWatch')}>
        <Text style={styles.buttonTitle}>{t('Stop Watch')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('Tab')}>
        <Text style={styles.buttonTitle}>{t('Tab Bar')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('FlatListAppearance')}>
        <Text style={styles.buttonTitle}>{t('FlatList Appearance')}</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigate('CustomSlider')}>
        <Text style={styles.buttonTitle}>{t('Custom Slider')}</Text>
      </Pressable>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <Pressable
        style={styles.button}
        onPress={() => {
          // navigate('VideoCall');
        }}
      >
        <Text style={styles.buttonTitle}>{t('Video Call')}</Text>
        <Text>{t('In progress')}</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          // navigate('ColorSelection')
        }}
      >
        <Text style={styles.buttonTitle}>{t('Color Selection')}</Text>
        <Text>{t('In progress')}</Text>
      </Pressable>
    </View>
  );
};

export default Start;

type TProps = {};
