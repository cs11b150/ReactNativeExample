import React from 'react';
import {StyleSheet, View, Button} from 'react-native';


export default class Home extends React.Component {

    static navigationOptions = {
        title: 'ReactNativeExample'
    };

    constructor(props) {
        super(props);
        this.state = {
            components: [
                'Button',
                'ListView',
            ]
        };
    }

    onPress(index) {
        const {navigate} = this.props.navigation;
        navigate(this.state.components[index]);
    }

    render() {

        return <View style={styles.container}>
            {this.state.components.map((item, index) => {
                return <View key={index} style={styles.item}>
                    <Button onPress={this.onPress.bind(this, index)} title={item}/>
                </View>
            })}
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    item: {
        paddingTop: 20
    }
});