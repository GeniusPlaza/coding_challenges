import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import DefaultStyles from '../constants/default-styles';

const Input = props => {
    return <TextInput {...props} style={{ ...DefaultStyles.input, ...props.style }} />;
};

export default Input;