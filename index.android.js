/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {AppRegistry,} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from './js/home';
import JButton from './js/components/button';
import JListView from './js/components/listview';

const App = StackNavigator({
    Home: {screen: Home},
    Button: {screen: JButton},
    ListView: {screen: JListView},
});

AppRegistry.registerComponent('ReactNativeExample', () => App);
