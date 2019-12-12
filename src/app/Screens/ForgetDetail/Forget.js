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
import Logo from '../../commonComponent/Logo';
import {Button, Input} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)',
  },
  half0: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
    // backgroundColor: 'yellow',
  },
  half1: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  formLogin: {
    flex: 4,
    // backgroundColor: 'red',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 5,
    // borderRadius: 50,
    color: 'white',
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,

    backgroundColor: 'rgba(255, 255, 255, 0.2)',

    marginLeft: 50,
    // borderRadius: 50,
    marginTop: 30,
    marginRight: 50,
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7a62ff',
    marginLeft: 50,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
    marginRight: 50,
  },

  searchIcon: {
    padding: 10,
  },

  buttonStyle: {
    backgroundColor: '#aaa',
  },

  containerOR: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },
});

export default class ForgetPass extends Component {
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
        source={require('../../commonComponent/images/forgetbg.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.half0}>
            <Button
              title="Back"
              buttonStyle={{
                backgroundColor: 'transparent',
              }}
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </View>
          <View style={styles.half1}>
            <Logo />
          </View>
          <View style={styles.formLogin}>
            <View style={styles.searchSection}>
              <Icon
                style={styles.searchIcon}
                name="user"
                size={20}
                color="rgba(255, 255, 255, 0.8)"
              />
              <TextInput
                style={styles.input}
                placeholder="Enter register email"
                placeholderTextColor="rgba(255, 255, 255, 0.398041)"
                onChangeText={username => this.setState({username})}
                underlineColorAndroid="transparent"
              />
            </View>

            <View>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={this.onLogin.bind(this)}>
                <AppText style={{color: 'white'}}> Submit</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
