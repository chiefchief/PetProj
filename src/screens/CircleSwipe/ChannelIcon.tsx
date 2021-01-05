import React, {PureComponent} from 'react';
import {Animated, Pressable, StyleSheet, Image, ImageStyle, Text, TextStyle, ViewStyle} from 'react-native';

interface ICategoryItem {
  id: number;
  name: string;
  image_url: string;
  radius: number;
}

export default class CircleListItem extends PureComponent<ICategoryItem> {
  shakeAnimation = new Animated.Value(0);

  private onShakeAnimation = () => {
    Animated.sequence([
      Animated.timing(this.shakeAnimation, {toValue: 10, duration: 75, useNativeDriver: true}),
      Animated.timing(this.shakeAnimation, {toValue: -10, duration: 75, useNativeDriver: true}),
      Animated.timing(this.shakeAnimation, {toValue: 10, duration: 75, useNativeDriver: true}),
      Animated.timing(this.shakeAnimation, {toValue: 0, duration: 75, useNativeDriver: true}),
      Animated.timing(this.shakeAnimation, {toValue: 10, duration: 75, useNativeDriver: true}),
      Animated.timing(this.shakeAnimation, {toValue: -10, duration: 75, useNativeDriver: true}),
      Animated.timing(this.shakeAnimation, {toValue: 10, duration: 75, useNativeDriver: true}),
      Animated.timing(this.shakeAnimation, {toValue: 0, duration: 75, useNativeDriver: true}),
    ]).start();
  };

  render() {
    const {name, image_url, radius} = this.props;

    const source = {
      uri: image_url,
    };

    return (
      <Animated.View
        style={[
          layout,
          {
            width: radius * 2,
            height: radius * 2,
          },
          {transform: [{translateX: this.shakeAnimation}]},
        ]}
      >
        <Pressable
          style={[
            btn,
            {
              width: radius * 2 - 30,
              height: radius * 2 - 30,
              borderRadius: (radius * 2) / 2,
            },
          ]}
          onPress={this.onShakeAnimation}
        >
          <Image {...{source}} style={[image]} />
        </Pressable>
        <Text style={title}>{name}</Text>
      </Animated.View>
    );
  }
}

const layout: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
};

const btn: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 40,
  backgroundColor: '#5d4382',
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: '#5d4382',
};

const title: TextStyle = {
  marginTop: 10,
  color: 'white',
  textAlign: 'center',
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 1,
};

const image: ImageStyle = {
  width: 40,
  height: 40,
};
