import React, {useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import faker from 'faker';
import {Image} from '@components';
import styles, {SPACING, IMAGE_SIZE} from './styles';
import {height, width} from '@constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

/**
 *
 * https://youtu.be/gjC2oUJhePE
 *
 */

// const API_KEY = 'YOUR_PEXELS.COM_API_KEY';
// const API_URL = 'https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20';

// const fetchImagesFromPexel = async () => {
//   try {
//     const data = await fetch(API_URL, {
//       headers: {
//         Authorization: API_KEY,
//       },
//     });
//     const result = await data.json();
//     console.log(result, 'RESULT');
//   } catch (error) {
//     console.log(error, 'COUGHT ERROR');
//   }
// };

const DATA = [...Array(24).keys()].map((_) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(
      60,
    )}.jpg`,
  };
});

const FlatGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const topRef = useRef<FlatList>(null);
  const thumbRef = useRef<FlatList>(null);
  const keyExtractor = (item: TDataItem) => item.key;

  const changeActiveIndex = (index: number) => {
    setActiveIndex(index);
    topRef.current?.scrollToOffset({offset: index * width, animated: true});
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={topRef}
        data={DATA}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => changeActiveIndex(Math.floor(e.nativeEvent.contentOffset.x / width))}
        renderItem={({item}: {item: TDataItem}) => (
          <View style={{width, height}}>
            <Image source={{uri: item.image}} style={{flex: 1}} />
          </View>
        )}
        keyExtractor={keyExtractor}
      />
      <FlatList
        ref={thumbRef}
        style={styles.bottomFlat}
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}: {item: TDataItem; index: number}) => (
          <TouchableOpacity onPress={() => changeActiveIndex(index)}>
            <Image
              source={{uri: item.image}}
              style={[
                styles.smallImageSize,
                {borderWidth: 2, borderColor: index === activeIndex ? '#FFF' : 'transparent'},
              ]}
            />
          </TouchableOpacity>
        )}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
export default FlatGallery;

type TDataItem = {
  key: string;
  image: string;
};
