import React from 'react';
import {useCallback} from '@hooks';
import {Text, View} from '@components';
import styles from './styles';
import {TouchableOpacity} from 'react-native';

const RoundButton: React.FC<TProps> = ({title, color, background, onPress, disabled}) => {
  const onP = useCallback(() => {
    if (!disabled && onPress) {
      return onPress();
    }
    return () => {};
  }, [disabled, onPress]);
  return (
    <TouchableOpacity
      onPress={onP}
      style={[styles.button, {backgroundColor: background}]}
      activeOpacity={disabled ? 1.0 : 0.7}
    >
      <View style={styles.buttonBorder}>
        <Text style={[styles.buttonTitle, {color}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoundButton;

type TProps = {
  title: string;
  color: string;
  background: string;
  onPress?: () => void;
  disabled?: boolean;
};
