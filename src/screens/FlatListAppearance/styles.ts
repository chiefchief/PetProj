import {colors, top, width} from '@constants';
import {shadowBlock} from '@helpers';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: top,
    flex: 1,
  },
  item: {
    width: width - 32,
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    ...shadowBlock,
    backgroundColor: colors.white_FFFFFF,
  },
  pressable: {
    position: 'absolute',
    right: 16,
    top: 0,
  },
});
