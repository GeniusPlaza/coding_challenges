import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';

import {loginRequest} from '../Requests';

class LoginView extends React.Component {
  _username = "";
  _password = "";

  onSetUsername = (text) => {
    this._username = text;
  }
  
  onSetPassword = (text) => {
    this._password = text;
  }

  onLoginRequest = (username, password) => {
    if (username.length == 0)
      this.props.onFail("Missing username");
    else if (password.length == 0)
      this.props.onFail("Missing password");
    else
    {
      // There should be a way to init the _loginRequest in the constructur. Not sure how to do it yet.
      let _loginRequest = this.props.loginRequest != null ? this.props.loginRequest : loginRequest;

      // loginRequest.Login(_username, _password);
      _loginRequest(
        username, 
        password, 
        ()=>{
          this.props.onSuccess();
        },
        (error)=>{
          this.props.onFail(error);
        }
      );
    }
  };

//<Text style={styles.subTitle}>Username</Text>
//<Text style={styles.subTitle}>Password</Text>

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.boxContainer}>
          <TextInput 
            placeholder = "username"
            style = {styles.textInput}
            onChangeText={text => this.onSetUsername(text)}
          />
          <TextInput 
            placeholder = "password"
            style = {styles.textInput}
            onChangeText={text => this.onSetPassword(text)}
          />
          <View style={styles.buttonContainer}>
            <Button style={styles.button} title="Login" onPress={()=>this.onLoginRequest(this._username, this._password)}/>
          </View>
        </View>
      </View>
    );
  }
};

export default LoginView;

const styles = StyleSheet.create({
  title:{
    fontSize: 40,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 100
  },
  subTitle:{
    fontSize: 20,
    color: 'black',
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  boxContainer:{
    //flex: 1,
    backgroundColor: '#fff',
    height: 270,
    padding: 30
  },
  textInput: {
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20
  },
  buttonContainer:{
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    borderColor: 'black',
  },
  // none of the button styles are working
  button:{
    fontSize: 40,
    height: 40
  }
});
