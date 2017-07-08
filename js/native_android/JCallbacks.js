import React from 'react';
import {StyleSheet, NativeModules, View, Button, Text} from 'react-native';
import CommonStyles from '../styles/common';
const _JCallbacks = NativeModules['JCallbacks'];

export default class JCallbacks extends React.Component {

    static navigationOptions = {
        title: 'ReactNativeExample'
    };

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            textPromises: "",
        };
    }

    handleTestPress() {
        _JCallbacks.test((text) => {
            this.setState({
                text: text
            })
        });
    }

    async handleTestPromisesPress() {
        const textPromises = await _JCallbacks['testPromises']();
        this.setState({
            textPromises: textPromises
        })
    }

    render() {
        return <View style={CommonStyles.container}>
            <View style={styles.childView}>
                <Text>{this.state.text}</Text>
            </View>
            <View style={styles.childView}>
                <Button title="Test"
                        onPress={this.handleTestPress.bind(this)}/>
            </View>
            <View style={styles.childView}>
                <Text>{this.state.textPromises}</Text>
            </View>
            <View style={styles.childView}>
                <Button title="Test Promises"
                        onPress={this.handleTestPromisesPress.bind(this)}/>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    childView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});