import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import styles from './styles';

const Text: React.FC<TextProps> = ({children, style, ...otherProps}) => {
  return (
    <RNText style={[styles.defaultText, style]} {...otherProps}>
      {children}
    </RNText>
  );
};

export default Text;
