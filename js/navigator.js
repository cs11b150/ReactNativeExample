import {StackNavigator} from 'react-navigation';

import Home from './home';
import JButton from './components/button';
import JListView from './components/listview';
import JActivityIndicator from './components/activityindicator';
import JFlatList from './components/flatlist';
import JNativeToastAndroid from './components/nativetoastandroid';
import JCallbacks from './native_components/JCallbacks';
import JEventListener from './native_components/JEventListener';

export default StackNavigator({
    Home: {screen: Home},
    Button: {screen: JButton},
    ListView: {screen: JListView},
    ActivityIndicator: {screen: JActivityIndicator},
    FlatList: {screen: JFlatList},
    NativeToastAndroid: {screen: JNativeToastAndroid},
    JCallbacks: {screen: JCallbacks},
    JEventListener: {screen: JEventListener},
});