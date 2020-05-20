import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Input from '../components/Input'
import Colors from '../constants/Colors'
import MainButton from '../components/MainButton'

const LoginScreen = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

    const usernameInputHandler = inputText => {
        setEnteredUsername(inputText)
    }

    const passwordInputHandler = inputText => {
        setEnteredPassword(inputText)
    }

    let errorMessage

    if (props.showError) {
        errorMessage =
            <Text style={styles.error}>Wrong username and/or password</Text>
    }

    return (
        <View style={styles.screen}>
            {errorMessage}
            <Input
                style={styles.input}
                autoCapitalize='none'
                blurOnSubmit
                autoCorrect={false}
                onChangeText={usernameInputHandler}
                value={enteredUsername}
            />
            <Input
                style={styles.input}
                secureTextEntry={true}
                autoCapitalize='none'
                blurOnSubmit
                autoCorrect={false}
                onChangeText={passwordInputHandler}
                value={enteredPassword}
            />
            <MainButton
                onPress={() =>
                    props.onLogin(enteredUsername, enteredPassword)}>
                LOGIN
            </MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background
    },
    input: {
        width: 350,
        textAlign: 'left'
    },
    error: {
        fontSize: 14,
        color: 'red'
    }
})

export default LoginScreen