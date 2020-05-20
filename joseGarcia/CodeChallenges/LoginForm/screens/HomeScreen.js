import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = props => {
    // let username = props.navigation.getParam('usernameKey');
    let username = props.username;
    return (
        <View>
            <Text>{username}</Text>
        </View>
    );
}


export default HomeScreen;