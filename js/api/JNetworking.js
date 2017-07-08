import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class JNetworking extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }

    async getData(uri) {
        try {
            let response = await fetch(uri);
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    onPress() {
        const that = this;
        this.getData("http://op5afwpz6.bkt.clouddn.com/AppData/RtmpLive/AppBroadcastStop")
            .then((response) => {
                console.log(response);
                that.setState({
                    text: JSON.stringify(response)
                });
            });
    }

    render() {
        return <View style={styles.container}>
            <View style={styles.textView}>
                <Text>{this.state.text}</Text>
            </View>
            <Button title="Http Get" onPress={this.onPress.bind(this)}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textView: {
        width: '100%',
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    }
});