import React, {useEffect, useState} from 'react';
import {FlatList, View} from '@components';
import styles from './styles';
import {Text} from 'react-native';
import {calcInterval} from '../../calcInterval';

const LapsTable: React.FC<TProps> = ({laps, timer}) => {
  const [min, setMin] = useState(Number.MAX_SAFE_INTEGER);
  const [max, setMax] = useState(Number.MIN_SAFE_INTEGER);

  useEffect(() => {
    const finishedLaps = laps.slice(1);
    if (finishedLaps.length >= 2) {
      setMin(Math.min(...finishedLaps));
      setMax(Math.max(...finishedLaps));
    }
  }, [laps]);

  const keyExtractor = (_: number, index: number) => `${index}`;
  const renderItem = ({item, index}: {item: number; index: number}) => {
    const lapStyle = [styles.lapText, item === min && styles.fastest, item === max && styles.slowest];
    return (
      <View style={styles.lapContainer}>
        <Text style={lapStyle}>Lap {laps.length - index}</Text>
        <Text style={lapStyle}>{calcInterval(index === 0 ? timer + item : item)}</Text>
      </View>
    );
  };

  return <FlatList style={styles.container} data={laps} renderItem={renderItem} keyExtractor={keyExtractor} />;
};

export default LapsTable;

type TProps = {
  laps: number[];
  timer: number;
};
