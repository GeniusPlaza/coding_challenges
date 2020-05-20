import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'

import Colors from '../constants/Colors'

const MainButton = props => {
    let ButtonComponent = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent onPress={props.onPress} activeOpacity={0.6}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10
    },
    buttonText: {
        color: 'black',
        fontFamily: 'roboto-condensed',
        fontSize: 18
    }
})

export default MainButton