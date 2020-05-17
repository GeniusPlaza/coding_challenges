/**
 * Main Samus App. Gusty Garden project.
 */

import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native'

import LoginView from './components/LoginView';
import LoggedInView from './components/LoggedInView';

const ShowError = (error) => {
  Alert.alert(
    'An error occurred',
    error,
    [
      {
        text: 'Ok'
      }
    ]
  )
};

const App = () => {
  const [state, setState] = useState(0);

  let content = <LoginView 
    onSuccess={()=>setState(1)}
    onFail={ShowError}
  />;

  // find what screen to render
  if (state == 1)
    content = <LoggedInView onPress={()=>setState(0)}/>;

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  }
});

export default App;
