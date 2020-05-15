import React from 'react';
import { View, Text, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

import DefaultStyles from '../constants/default-styles'

const MainButton = props => {
    const ButtonComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    return (
        <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
            <View style={DefaultStyles.button}>
                <Text style={DefaultStyles.buttonText}>{props.children}</Text>
            </View>
        </ButtonComponent>
    );
};

export default MainButton;