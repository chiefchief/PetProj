import {top} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: top,
    padding: 8,
    paddingBottom: 50,
  },
  paragraph: {
    margin: 12,
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Menlo',
    color: 'white',
  },
  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'turquoise',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  arrow: {
    width: 16,
    height: 16,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderRadius: 2,
    borderColor: 'white',
    transform: [{rotate: '45deg'}],
  },
});
