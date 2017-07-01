import {StackNavigator} from 'react-navigation';

import Home from './home';
import JButton from './components/button';
import JListView from './components/listview';
import JActivityIndicator from './components/activityindicator';
import JFlatList from './components/flatlist';
import JNativeToastAndroid from './components/nativetoastandroid';

export default StackNavigator({
    Home: {screen: Home},
    Button: {screen: JButton},
    ListView: {screen: JListView},
    ActivityIndicator: {screen: JActivityIndicator},
    FlatList: {screen: JFlatList},
    NativeToastAndroid: {screen: JNativeToastAndroid}
});