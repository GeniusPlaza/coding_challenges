import React from 'react';
import { View, Button } from 'react-native';

const LoginScreen = props => {
    return (
        <View>
            <Button
                title="Log In"
                onPress={() => {
                    props.navigation.navigate('LoginForm')
                }}
            />
        </View>
    )
}

export default LoginScreen;