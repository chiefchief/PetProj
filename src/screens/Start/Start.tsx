import React from 'react';
import styles from './styles';
import {screenData, TScreenItem} from './data';
import {FlatList} from 'react-native-gesture-handler';
import StartItem from './StartItem';

const Start: React.FC = () => {
  // Start screen data.

  const renderItem = ({item}: {item: TScreenItem}) => <StartItem item={item} />;
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
