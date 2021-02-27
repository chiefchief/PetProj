import React from 'react';
import {useTranslation} from '@hooks';
import {Text} from '@components';
import styles from './styles';
import {Pressable} from 'react-native';
import {navigate} from '@services';
import {screenData, TScreenItem} from './data';
import {FlatList} from 'react-native-gesture-handler';

const Start: React.FC = () => {
  // Start screen data.
  const {t} = useTranslation();

  const renderItem = ({item}: {item: TScreenItem}) => {
    const screenName = item.screen.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    const renderScreen = item.test ? t(screenName) + t(' _ (In Test)') : t(screenName);
    return (
      <Pressable
        disabled={item.progress}
        style={[styles.button, item.progress && styles.buttonDisabled]}
        onPress={() => navigate(item.screen)}
      >
        <Text style={styles.buttonTitle}>{renderScreen}</Text>
      </Pressable>
    );
  };
  const keyExtractor = (item: TScreenItem) => `item-${item.id}`;

  return (
    <FlatList
      columnWrapperStyle={styles.columnWrapperStyle}
      numColumns={2}
      data={screenData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default Start;
