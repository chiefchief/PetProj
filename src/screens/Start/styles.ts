import {colors, width} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  button: {
    marginTop: 16,
    width: (width - 48) / 2,
    backgroundColor: colors.white_FFFFFF,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonDisabled: {
    backgroundColor: colors.gray_888888,
  },
  buttonTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
