import {width} from '@constants';
import {StyleSheet} from 'react-native';

export const OVERFLOW_HEIGHT = 70;
export const SPACING = 10;
export const ITEM_WIDTH = width * 0.76;
export const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
export const VISIBLE_ITEMS = 3;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING * 2,
  },
  itemContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: 'hidden',
  },
  imageView: {
    position: 'absolute',
    left: -ITEM_WIDTH / 2,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 14,
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    padding: SPACING * 2,
    marginTop: 50,
  },
});
