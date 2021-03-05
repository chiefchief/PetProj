import {colors, width} from '@constants';
import {StyleSheet} from 'react-native';

const calcWidth = (width - 48) / 2;

export default StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  button: {
    marginTop: 16,
    width: calcWidth,
    backgroundColor: colors.white_FFFFFF,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  videoButton: {
    marginTop: 4,
    borderRadius: 8,
    alignItems: 'center',
    padding: 4,
    backgroundColor: colors.white_FFFFFF,
  },
  video: {
    width: calcWidth - 32,
    height: (calcWidth - 32) * 2,
  },
  buttonDisabled: {
    backgroundColor: colors.gray_888888,
  },
  buttonTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowView: {
    flexDirection: 'row',
    width: 40,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLine: {
    position: 'absolute',
    width: 12,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'black',
  },
});
