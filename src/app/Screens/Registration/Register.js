import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button as Button1,
} from 'react-native';
import AppText from '../../commonComponent/TextApp';
import {Button, Input} from 'react-native-elements';
import Logo from '../../commonComponent/Logo';
import styles from '../../commonComponent/style';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      showPass: true,
    };
  }

  onLogin() {
    const {username, password} = this.state;

    console.log('Credentials', `${username} + ${password}`);
  }
  render() {
    return (
      <ImageBackground
        source={require('../../commonComponent/images/signUpbg.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.half1Reg}>
            <Logo />
          </View>
          <View style={styles.formRegister}>
            <View style={styles.searchSection}>
              <Icon
                style={styles.searchIcon}
                name="user"
                size={20}
                color="rgba(255, 255, 255, 0.8)"
              />
              <TextInput
                style={styles.input}
                placeholder="Your email"
                placeholderTextColor="rgba(255, 255, 255, 0.398041)"
                onChangeText={username => this.setState({username})}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.searchSection}>
              <Icon
                style={styles.searchIcon}
                name="lock"
                size={20}
                color="rgba(255, 255, 255, 0.8)"
              />
              <TextInput
                style={styles.input}
                placeholder="Your password"
                placeholderTextColor="rgba(255, 255, 255, 0.398041)"
                onChangeText={password => this.setState({password})}
                secureTextEntry={this.state.showPass}
                underlineColorAndroid="transparent"
              />
              {this.state.showPass ? (
                <AppText
                  onPress={() => {
                    this.setState({showPass: false});
                  }}
                  style={{color: 'white', paddingRight: 10}}>
                  SHOW
                </AppText>
              ) : (
                <AppText
                  onPress={() => {
                    this.setState({showPass: true});
                  }}
                  style={{color: 'white', paddingRight: 10}}>
                  HIDE
                </AppText>
              )}
            </View>

            <View
              style={{
                position: 'relative',
                marginTop: 30,
                display: 'flex',
              }}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={this.onLogin.bind(this)}>
                <AppText style={{color: 'white'}}> SIGN UP</AppText>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.registerAlready}>
            <AppText
              style={{
                color: '#FFF',
                fontWeight: 'bold',
                paddingLeft: 10,
                paddingTop: 10,
                fontSize: 15,
              }}>
              Already have an account?
            </AppText>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <AppText
                style={{
                  color: '#7a62ff',
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  paddingTop: 10,

                  fontSize: 15,
                }}>
                SignIn
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
