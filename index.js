import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import StoreProvider from './components/StoreProvider';

AppRegistry.registerComponent(appName, () => StoreProvider);
