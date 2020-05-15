import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import Input from '../../components/Input';
import DefaultStyles from '../../constants/default-styles';
import MainButton from '../../components/MainButton';
import { USERS } from '../../data/dummy-data';

const LoginFormScreen = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameInputHandler = usernameInputText => {
        setUsername(usernameInputText);
    }

    const passwordInputHandler = passwordInputText => {
        setPassword(passwordInputText);
    }

    const resetInputHandler = () => {
        setUsername('')
        setPassword('')
    }

    const attemptLogin = () => {
        if (checkIfUserExists(username)) {
            if (checkPasswordMatches(password)) {
                openNextScreen();
                return;
            }
        }
        displayLoginError();
    }

    const checkIfUserExists = () => {
        return USERS[username] !== undefined
    }

    const checkPasswordMatches = () => {
        return USERS[username] === password
    }

    const displayLoginError = () => {
        Alert.alert(
            'Invalid!',
            'The username/password is incorrect',
            [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
        );
    }

    const openNextScreen = () => {
        props.navigation.navigate({
            routeName: 'Home',
            params: {
                usernameKey: username
            }

        })
    }

    return (
        <View>
            <Input
                style={DefaultStyles.input}
                value={username}
                autoCapitalize="none"
                onChangeText={usernameInputHandler}
                autoCorrect={false}
                maxLength={20}
            />
            <Input
                style={DefaultStyles.input}
                blurOnSubmit
                keyboardType="visible-password"
                value={password}
                autoCapitalize="none"
                onChangeText={passwordInputHandler}
                autoCorrect={false}
                maxLength={20}
            />
            <MainButton onPress={attemptLogin}>Log In</MainButton>
        </View>
    )
}

export default LoginFormScreen;