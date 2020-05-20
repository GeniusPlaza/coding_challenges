import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

import Colors from '../constants/Colors'

const Input = props => {
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: Colors.input,
        marginVertical: 5,
        fontFamily: 'roboto-condensed',
        fontSize: 24,
        color: 'white',
        paddingHorizontal: 10
    }
})

export default Input