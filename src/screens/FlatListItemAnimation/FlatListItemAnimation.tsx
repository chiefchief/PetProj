// Inspiration: https://dribbble.com/shots/14154226-Rolodex-Scrolling-Animation/attachments/5780833?mode=media
// Photo by Sharefaith from Pexels
// Background image: https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/

import React, {useRef} from 'react';
import {Image, Animated, Text, View} from 'react-native';
import faker from 'faker';
import {top} from '@constants';

faker.seed(10);
const DATA = [...Array(30).keys()].map((_) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(
      60,
    )}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 1.5;

const FlatListItemAnimation: React.FC = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const keyExtractor = (item: any) => item.key;
  const renderItem = ({item, index}: {item: any; index: number}) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const scale = scrollY.interpolate({inputRange, outputRange: [1, 1, 1, 0]});
    return (
      <Animated.View
        style={{
          transform: [{scale}],
          flexDirection: 'row',
          padding: SPACING / 2,
          marginBottom: SPACING / 2,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: 12,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.24,
          shadowRadius: 20,
        }}
      >
        <Image
          source={{uri: item.image}}
          style={{width: AVATAR_SIZE, aspectRatio: 1, borderRadius: AVATAR_SIZE, marginRight: SPACING / 2}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
          <Text style={{fontSize: 16, opacity: 0.7}}>{item.jobTitle}</Text>
          <Text style={{fontSize: 12, color: '#09C'}}>{item.email}</Text>
        </View>
      </Animated.View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Animated.FlatList
        style={{paddingHorizontal: SPACING / 2, paddingTop: top}}
        data={DATA}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {useNativeDriver: true})}
      />
    </View>
  );
};

export default FlatListItemAnimation;
