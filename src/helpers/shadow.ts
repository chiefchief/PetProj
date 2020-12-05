import {Platform} from 'react-native';

export const shadowBlock = Platform.select({
  ios: {
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0.2,
      height: 2,
    },
    shadowColor: 'gray',
    shadowRadius: 4,
  },
  android: {
    elevation: 4,
  },
});
