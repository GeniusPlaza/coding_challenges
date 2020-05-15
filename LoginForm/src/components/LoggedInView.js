import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

export default LoggedInView = (props) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>You are logged in</Text>
        <View style={styles.buttonContainer}>
          <Button title = "Change User" onPress={()=>props.onPress()}/>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  title:{
    fontSize: 40,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 100
  },
  buttonContainer:{
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    borderColor: 'black',
  },

});
