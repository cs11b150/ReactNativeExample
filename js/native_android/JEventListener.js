import React from 'react';
import {DeviceEventEmitter, NativeModules, View, Button, Text} from 'react-native';
import CommonStyles from '../styles/common';
const _JEventListener = NativeModules['JEventListener'];

export default class JEventListener extends React.Component {

    static navigationOptions = {
        title: 'ReactNativeExample'
    };

    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }

    componentWillMount() {
        DeviceEventEmitter.addListener('js_event', (data) => {
            this.setState({
                text: data,
            })
        });
    }

    onPress() {
        _JEventListener.test();
    }
    
    render() {
        return <View style={CommonStyles.container}>
            <View style={CommonStyles.child_container}>
                <Text>{this.state.text}</Text>
            </View>
            <View style={CommonStyles.child_container}>
                <Button title="Start"
                        onPress={this.onPress.bind(this)}/>
            </View>
        </View>
    }
    
}