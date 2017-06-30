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
                'ActivityIndicator',
                'FlatList',
            ]
        };
    }

    onPress(index) {
        const {navigate} = this.props.navigation;
        navigate(this.state.components[index]);
    }

    render() {

        return <View style={styles.container}>
            <View style={styles.section}>
                {this.state.components.map((item, index) => {
                    return <View key={index} style={styles.item}>
                        <Button onPress={this.onPress.bind(this, index)} title={item}/>
                    </View>
                })}
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    section: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    item: {
        paddingTop: 20,
        paddingLeft: 20,
    }
});