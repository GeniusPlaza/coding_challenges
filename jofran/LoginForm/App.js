import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import LoginScreen from './screens/LoginScreen'
import MainScreen from './screens/MainScreen'

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-condensed':
      require('./assets/fonts/RobotoCondensed-Regular.ttf')
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [loginError, setLoginError] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)} />
    )
  }

  const loginHandler = (username, password) => {
    if (username == 'wobistdu' && password == 'links234') {
      setUserLoggedIn(true)
    } else {
      setLoginError(true)
    }

  }

  const logoutHandler = () => {
    setUserLoggedIn(false)
    setLoginError(false)
  }

  let content = <LoginScreen onLogin={loginHandler} showError={loginError} />

  if (userLoggedIn) {
    content = <MainScreen onLogout={logoutHandler} />
  }

  return (
    <View style={styles.screen}>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
})
