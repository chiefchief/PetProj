/**
 *
 * https://youtu.be/gWegskGYCtA
 *
 */

import React, {useEffect, useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import LapsTable from './components/LapsTable/LapsTable';
import {calcInterval} from './calcInterval';
import RoundButton from './components/RoundButton/RoundButton';

let timer = 0;
const StopWatch: React.FC = () => {
  const [start, setStart] = useState(0);
  const [now, setNow] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);

  const interval = useMemo(() => {
    return calcInterval(laps.reduce((total, curr) => total + curr, 0) + now - start);
  }, [laps, now, start]);

  useEffect(() => {
    return clearInterval(timer);
  }, []);

  const startTimer = () => {
    setNow(Date.now());
    setStart(Date.now());
    setLaps([0]);
    startInterv();
  };

  const lap = () => {
    const [firstLap, ...other] = laps;
    setNow(Date.now());
    setStart(Date.now());
    setLaps([0, firstLap + now - start, ...other]);
  };

  const stop = () => {
    clearInterval(timer);
    const [firstLap, ...other] = laps;
    setNow(0);
    setStart(0);
    setLaps([firstLap + now - start, ...other]);
  };

  const reset = () => {
    setNow(0);
    setStart(0);
    setLaps([]);
  };

  const resume = () => {
    setNow(Date.now());
    setStart(Date.now());
    startInterv();
  };

  const startInterv = () => (timer = setInterval(() => setNow(Date.now()), 100));

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{interval}</Text>
      {laps.length === 0 && (
        <View style={styles.buttonsRow}>
          <RoundButton title="Lap" color="#8B8B90" background="#151515" disabled />
          <RoundButton title="Start" color="#50D167" background="#1B361F" onPress={startTimer} />
        </View>
      )}
      {start > 0 && (
        <View style={styles.buttonsRow}>
          <RoundButton title="Lap" color="#FFFFFF" background="#3D3D3D" onPress={lap} />
          <RoundButton title="Stop" color="#E33935" background="#3C1715" onPress={stop} />
        </View>
      )}
      {laps.length > 0 && start === 0 && (
        <View style={styles.buttonsRow}>
          <RoundButton title="Reset" color="#FFFFFF" background="#3D3D3D" onPress={reset} />
          <RoundButton title="Start" color="#50D167" background="#1B361F" onPress={resume} />
        </View>
      )}
      <LapsTable laps={laps} timer={now - start} />
    </View>
  );
};

export default StopWatch;
