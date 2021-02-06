import React, {useEffect, useState} from 'react';
import {View, Animated, StyleProp, TextStyle, ViewStyle} from 'react-native';
import styles from './styles';

const TextAnimation: React.FC<TProps> = ({content, duration = 500, textStyle, style, onFinish}) => {
  const [txtArr, setTxtArr] = useState<TTxtItem[]>([]);

  useEffect(() => {
    const a = content.trim().split(' ');
    const b = a.map((word: string) => ({
      word,
      animation: new Animated.Value(0),
    }));
    setTxtArr(b);
  }, [content]);

  useEffect(() => {
    if (txtArr.length) {
      animated();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txtArr]);

  const animated = (toValue = 1) => {
    const animations = txtArr.map((item) =>
      Animated.timing(item.animation, {
        toValue,
        duration: duration,
        useNativeDriver: true,
      }),
    );
    Animated.stagger(duration / 5, toValue === 0 ? animations.reverse() : animations).start(() => {
      setTimeout(() => animated(toValue === 0 ? 1 : 0), 1000);
      if (onFinish) {
        onFinish();
      }
    });
  };

  const renderItem = (item: any, index: number) => {
    return (
      <Animated.Text
        key={`${item.word}-${index}`}
        style={[
          textStyle,
          {
            opacity: item.animation,
            transform: [
              {
                translateY: Animated.multiply(item.animation, new Animated.Value(-5)),
              },
            ],
          },
        ]}
      >
        {item.word}
        {`${index < txtArr.length ? ' ' : ''}`}
      </Animated.Text>
    );
  };

  return <View style={[style, styles.textWrapper]}>{txtArr.map(renderItem)}</View>;
};

export default TextAnimation;

TextAnimation.defaultProps = {
  content: 'Fill in "content"',
  textStyle: {},
  style: {},
  duration: 500,
  onFinish: () => null,
};

type TProps = {
  content: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  duration?: number;
  onFinish?: () => void;
};

type TTxtItem = {
  word: string;
  animation: Animated.Value;
};
