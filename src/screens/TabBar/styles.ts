import {StyleSheet} from 'react-native';

export const backgroundColor = 'white';
export const tabHeight = 64;

export default StyleSheet.create({
  bottom: {
    backgroundColor,
  },
  iconView: {
    position: 'absolute',
    marginTop: 12,
    width: 40,
    aspectRatio: 1,
    borderRadius: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
  },
  activeIcon: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
