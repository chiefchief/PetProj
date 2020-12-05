import React from 'react';
import {KeyboardAvoidingView as KAView, Platform, StyleProp, ViewStyle, GestureResponderEvent} from 'react-native';

const KeyboardAvoidingView: React.FC<TProps> = ({
  children,
  keyboardVerticalOffset,
  iosBehavior,
  androidBehavior,
  ...props
}) => {
  const behavior: TBehavior = Platform.select({
    ios: iosBehavior || 'padding',
    android: androidBehavior || undefined,
  });

  return (
    <KAView keyboardVerticalOffset={keyboardVerticalOffset || 0} behavior={behavior} {...props}>
      {children}
    </KAView>
  );
};

export default KeyboardAvoidingView;

type TProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onStartShouldSetResponder?: ((event: GestureResponderEvent) => boolean) | undefined;
  keyboardVerticalOffset?: number;
  iosBehavior?: TBehavior;
  androidBehavior?: TBehavior;
};

type TBehavior = 'padding' | 'height' | 'position' | undefined;
