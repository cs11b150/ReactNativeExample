import React from 'react';
import CommonStyles from '../styles/common';
import {View, Button} from 'react-native';

export default class JButton extends React.Component {
    static navigationOptions = {
        title: 'Button'
    };
    
    render() {
        return <View style={CommonStyles.container}>
            <Button onPress={() => {}} title={"Button"}/>
        </View>
    }
}