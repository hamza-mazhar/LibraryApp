import React, {Component} from 'react';
import {View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import AppText from '../../commonComponent/TextApp';
import Logo from '../../commonComponent/Logo';
import {Button} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../commonComponent/style';

export default class Login extends Component {
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
        source={require('../../commonComponent/images/login.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.half0}>
            <Button
              title="Skip"
              buttonStyle={{
                backgroundColor: 'transparent',
              }}
              onPress={() => this.props.navigation.navigate('Settings')}
            />
          </View>
          <View style={styles.half1}>
            <Logo />
          </View>
          <View style={styles.formLogin}>
            {/* <Input
              placeholder="INPUT WITH CUSTOM ICON"
              leftIcon={<Icon name="user" size={24} color="black" />}
            /> */}
            {/* </View>
          <View style={styles.container}> */}
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
                marginTop: 30,
                display: 'flex',
              }}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={this.onLogin.bind(this)}>
                <AppText style={{color: 'white'}}> SIGN IN </AppText>
              </TouchableOpacity>
            </View>

            <View style={styles.containerOR}>
              <View
                style={{
                  backgroundColor: '#FFF',
                  border: '2px solid #FFFFFF',
                  opacity: 0.3,
                  borderBottomWidth: 2,
                  width: '20%',
                }}
              />
              <AppText
                style={{color: '#FFF', paddingRight: 10, paddingLeft: 10}}>
                OR
              </AppText>

              <View
                style={{
                  backgroundColor: '#FFF',
                  border: '2px solid #FFFFFF',
                  opacity: 0.3,
                  borderBottomWidth: 2,
                  width: '20%',
                }}
              />
            </View>
          </View>
          {/* <View style={{flex: 0.7, display: 'flex', backgroundColor: 'red'}}>
            <TouchableOpacity
              style={styles.facebookButton}
              onPress={this.onLogin.bind(this)}>
              <Icon
                name="facebook"
                size={20}
                color="rgba(255, 255, 255, 0.8)"
              />
              <AppText style={{color: 'white', paddingLeft: 20}}>
                {' '}
                CONTINUE WITH FACEBOOK
              </AppText>
            </TouchableOpacity>
          </View> */}
          <View style={styles.half2}>
            <AppText
              onPress={() => this.props.navigation.navigate('Forget')}
              style={{
                color: '#FFF',
                fontWeight: 'bold',
                letterSpacing: 1,
                paddingLeft: 10,
                opacity: 0.8,
              }}>
              {' '}
              FORGOT DETAILS?
            </AppText>
            <AppText
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={{
                color: '#FFF',
                letterSpacing: 1,
                opacity: 0.8,

                fontWeight: 'bold',
                paddingRight: 10,
              }}>
              {' '}
              CREATE ACCOUNT
            </AppText>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
