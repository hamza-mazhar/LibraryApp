import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen, DetailsScreen, SettingsScreen} from '../Screens/test';
import LoginScreen from '../Screens/Login/login';
import ForgetPassScreen from '../Screens/ForgetDetail/Forget';
import RegistrationScreen from '../Screens/Registration/Register';
const HomeStack = createStackNavigator({
  Home: {screen: HomeScreen},
  Details: {screen: DetailsScreen},
});
const SettingsStack = createStackNavigator({
  Settings: {screen: SettingsScreen},
});
const TabNavigator = createBottomTabNavigator(
  {
    Home: {screen: HomeStack},
    Message: {screen: SettingsStack},
    Cart: {screen: HomeStack},
    Settings: {screen: SettingsStack},
  },
  {
    initialRouteName: 'Message',

    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = 'ios-home';

        console.log('===========>', focused);
        if (routeName === 'Home') {
          iconName = `ios-home`;
        }
        if (routeName === 'Message') {
          iconName = `ios-book`;
        }
        if (routeName === 'Cart') {
          iconName = `ios-cart`;
        } else if (routeName === 'Settings') {
          iconName = `ios-settings`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const stackMainNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Forget: {
    screen: ForgetPassScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignUp: {
    screen: RegistrationScreen,
    navigationOptions: {
      header: null,
    },
  },
  // add screens here which you want to hide the tab bar
});

export default createAppContainer(stackMainNavigator);
