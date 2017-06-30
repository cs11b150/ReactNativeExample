import React from 'react';
import {ListView, Text} from 'react-native';

export default class JListView extends React.Component {

    static navigationOptions = {
        title: 'Button'
    };
    
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }
    
    render() {
        return <ListView 
            dataSource={this.state.dataSource} 
            renderRow={(rowData) => <Text>{rowData}</Text>}/>
    }
}

