import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'ReactNativeExample'
    };

    constructor(props) {
        super(props);
        this.state = {
            blocks: [{
                name: 'components',
                values: [
                    'JButton',
                    'ListView',
                    'ActivityIndicator',
                    'FlatList',
                ]
            }, {
                name: 'android',
                values: [
                    'JCallbacks',
                    'NativeToastAndroid',
                    'JEventListener',
                ],
            }, {
                name: 'ios',
                values: [],
            }, {
                name: 'api',
                values: [
                    'JNetworking'
                ],
            }]
        };
    }

    onPress(bIndex, vIndex) {
        const {navigate} = this.props.navigation;
        navigate(this.state.blocks[bIndex].values[vIndex]);
    }

    render() {
        return <View style={styles.container}>
            {this.state.blocks.map((block, bIndex) => {
                return <View key={bIndex}>
                    <Text style={styles.title}>
                        {block.name}
                    </Text>
                    <View style={styles.block}>
                        {block.values.map((value, vIndex) => {
                            return <View key={vIndex} style={styles.item}>
                                <Button onPress={this.onPress.bind(this, bIndex, vIndex)} title={value}/>
                            </View>
                        })}
                    </View>
                </View>
            })}
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    title: {
        margin: 8,
        fontSize: 16,
        fontWeight: '800',
    },
    block: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    item: {
        padding: 8,
    }
});