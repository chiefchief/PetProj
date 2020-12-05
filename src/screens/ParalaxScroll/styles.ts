import {width} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  itemView: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemInsideView: {
    borderRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    padding: 12,
    backgroundColor: 'white',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: 'white',
    position: 'absolute',
    bottom: -30,
    right: 60,
  },
});
