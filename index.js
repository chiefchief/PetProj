import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import {name} from './app.json';
import 'react-native-gesture-handler';
import {i18n} from '@services'; // need for React i18n initialization
import {enableScreens} from 'react-native-screens';

LogBox.ignoreAllLogs();

enableScreens();
AppRegistry.registerComponent(name, () => App);
