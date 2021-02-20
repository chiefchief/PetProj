import {width} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemView: {
    width: width,
  },
  item: {
    position: 'absolute',
    width: width / 3,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: width / 3,
    aspectRatio: 1,
  },
  point: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 8,
  },
  paginationView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
  },
});
