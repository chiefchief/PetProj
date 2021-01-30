import {bottom, colors, width} from '@constants';
import {StyleSheet} from 'react-native';

export const SPACING = 12;
export const IMAGE_SIZE = 80;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomFlat: {
    position: 'absolute',
    // width,
    bottom: bottom || 24,
    // paddingHorizontal: SPACING,
  },
  smallImageSize: {
    width: IMAGE_SIZE,
    aspectRatio: 1,
    borderRadius: 12,
    marginRight: SPACING,
  },
});
