import React, { useState } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors'
import MainButton from '../components/MainButton'

const MainScreen = props => {

    const handleLogout = () =>
        Alert.alert(
            'Are you sure?',
            'Press OK to logout',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => props.onLogout()
                }
            ],
        )

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>YOU ARE LOGGED IN</Text>
            <MainButton onPress={handleLogout}>
                <MaterialCommunityIcons name="logout" size={24} color="black" />
            </MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background
    },
    text: {
        fontFamily: 'roboto-condensed',
        fontSize: 32,
        color: 'white',
        marginBottom: 32
    }
})

export default MainScreen