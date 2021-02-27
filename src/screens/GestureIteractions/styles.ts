import {StyleSheet} from 'react-native';

export const POINT_SIZE = 80;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  point: {
    width: POINT_SIZE,
    height: POINT_SIZE,
    borderRadius: POINT_SIZE / 2,
  },
});
