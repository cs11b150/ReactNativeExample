import React from 'react';
import CommonStyles from '../styles/common';
import {ActivityIndicator, View} from 'react-native';

export default class JActivityIndicator extends React.Component {

    static navigationOptions = {
        title: 'ActivityIndicator'
    };
    
    render() {
        return <View style={CommonStyles.container}>
            <ActivityIndicator size="large" color="gray"/>
        </View>
    }
}