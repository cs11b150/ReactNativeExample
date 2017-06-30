import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

export default class JButton extends React.Component {
    static navigationOptions = {
        title: 'Button'
    };
    
    render() {
        return <View style={styles.container}>
            <Button onPress={() => {}} title={"sss"}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
});