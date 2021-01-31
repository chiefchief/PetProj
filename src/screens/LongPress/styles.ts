import {colors, width} from '@constants';
import {StyleSheet} from 'react-native';

export const BUTTON_SIZE = width / 3;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray_f2f2f2,
  },
  button: {
    width: BUTTON_SIZE,
    aspectRatio: 1,
    borderRadius: BUTTON_SIZE / 2,
    backgroundColor: colors.white_FFFFFF,
  },
});
