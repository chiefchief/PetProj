import {initialWindowMetrics} from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');
export const top = initialWindowMetrics?.insets?.top || 20;
export const bottom = initialWindowMetrics?.insets?.bottom || 0;
