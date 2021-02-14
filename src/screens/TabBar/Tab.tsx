import {Icon} from '@components';
import {width} from '@constants';
import React, {useEffect, useMemo, useState} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native';

const StaticTabbar: React.FC<TProps> = ({tabs, value}) => {
  const [values, setValues] = useState<Animated.Value[]>([]);
  const tabWidth = useMemo(() => width / tabs.length, [tabs]);

  useEffect(() => {
    const b = tabs.map((_: any, index: number) => new Animated.Value(index === 0 ? 1 : 0));
    setValues(b);
  }, [tabs]);

  const onPress = (index: number) => {
    Animated.sequence([
      Animated.parallel(
        values.map((v) =>
          Animated.timing(v, {
            toValue: 0,
            duration: 124,
            useNativeDriver: true,
          }),
        ),
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true,
        }),
        Animated.spring(values[index], {
          delay: 48,
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  return (
    <View style={styles.container}>
      {values.map((item, key) => {
        const translateY = item.interpolate({
          inputRange: [0, 0.75, 1],
          outputRange: [0, -48, -32],
        });

        return (
          <TouchableWithoutFeedback {...{key}} onPress={() => onPress(key)}>
            <Animated.View
              style={[
                styles.iconView,
                {
                  left: tabWidth * key + (tabWidth - 40) / 2,
                  transform: [{translateY}],
                },
              ]}
            >
              {/* <Icon name={item.name} color="black" size={25} /> */}
              <Icon name={'check-circle'} color="black" size={25} />
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default StaticTabbar;

type TProps = {
  tabs: any[];
  value: Animated.Value;
};

const styles = StyleSheet.create({
  iconView: {
    position: 'absolute',
    marginTop: 12,
    width: 40,
    aspectRatio: 1,
    borderRadius: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
  },
  activeIcon: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
