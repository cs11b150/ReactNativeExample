import {StackNavigator} from 'react-navigation';

import Home from './home';
import JButton from './components/JButton';
import JListView from './components/listview';
import JActivityIndicator from './components/activityindicator';
import JFlatList from './components/flatlist';
import JNativeToastAndroid from './components/nativetoastandroid';
import JCallbacks from './native_android/JCallbacks';
import JEventListener from './native_android/JEventListener';
import JNetworking from './api/JNetworking';

export default StackNavigator({
    Home: {screen: Home},
    JButton: {screen: JButton},
    ListView: {screen: JListView},
    ActivityIndicator: {screen: JActivityIndicator},
    FlatList: {screen: JFlatList},
    NativeToastAndroid: {screen: JNativeToastAndroid},
    JCallbacks: {screen: JCallbacks},
    JEventListener: {screen: JEventListener},
    JNetworking: {screen: JNetworking},
});