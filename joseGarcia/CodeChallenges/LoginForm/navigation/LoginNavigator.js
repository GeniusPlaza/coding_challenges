import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/login_flow/LoginScreen';
import LoginFormScreen from '../screens/login_flow/LoginFormScreen';
// import MainNavigator from '../navigation/MainNavigator';
import Colors from '../constants/colors';
import HomeScreen from '../screens/HomeScreen';

const LoginNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        LoginForm: LoginFormScreen,
        Home: HomeScreen
        // Home: MainNavigator
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }
    }
);

export default createAppContainer(LoginNavigator);