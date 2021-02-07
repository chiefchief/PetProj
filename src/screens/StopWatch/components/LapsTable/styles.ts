import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  lapContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#151515',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  lapText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  fastest: {
    color: '#4BC05F',
  },
  slowest: {
    color: '#CC3531',
  },
});
