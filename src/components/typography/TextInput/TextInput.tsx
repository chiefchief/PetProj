import React from 'react';
import {TextInput as TI, TextInputProps} from 'react-native';
import styles from './styles';

const TextInput: React.FC<TextInputProps> = ({style, ...TIProps}) => {
  return <TI style={[styles.defaultText, style]} {...TIProps} />;
};

export default TextInput;
