import {height, width} from '@constants';
import {StyleSheet} from 'react-native';

export const SPACING = 8;
export const ITEM_SIZE = width - 4 * SPACING - width / 4;
export const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
export const BACKDROP_HEIGHT = height * 0.8;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  genre: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#ccc',
    marginRight: 4,
    marginBottom: 4,
  },
  genreText: {
    fontSize: 9,
    opacity: 0.4,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  // Rating COMPONENT
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingNumber: {
    marginRight: 4,
    fontFamily: 'Menlo',
    fontSize: 14,
  },
  halfStarView: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  contentContainerStyle: {
    alignItems: 'flex-end',
  },
});
