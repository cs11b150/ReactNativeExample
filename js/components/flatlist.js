import React from 'react';
import {View, FlatList, Text} from 'react-native';
import CommonStyles from '../styles/common';

export default class JFlatList extends React.Component {

    static navigationOptions = {
        title: 'FlatList'
    };
    
    render() {
        return <View style={CommonStyles.container}>
            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}/>
        </View>
    }
}