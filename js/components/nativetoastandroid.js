import React from 'react';
import {View, Button} from 'react-native';
import CommonStyles from '../styles/common';
import JToastAndroid from '../native_components/ToastAndroid';

export default class JNativeToastAndroid extends React.Component {
    
    static navigationOptions = {
        title: 'NativeToastAndroid'
    };
    
    constructor(props) {
        super(props);
    }

    onPress() {
        JToastAndroid.show("Native Toast", JToastAndroid.SHORT);
    }
    
    render() {
        return <View style={CommonStyles.container}>
            <Button title="Toast" onPress={this.onPress.bind(this)}/>
        </View>
    }
}