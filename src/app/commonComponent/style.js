import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
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
  half1Reg: {
    flex: 1.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  half2: {
    display: 'flex',
    flex: 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  registerAlready: {
    // backgroundColor: 'red',
    display: 'flex',
    flex: 0.5,
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  formLogin: {
    // flex: 4,
    display: 'flex',

    // backgroundColor: 'yellow',
  },
  formRegister: {
    // display: 'flex',
    // flexGrow: '1',
    // flex: 1.5,
    // backgroundColor: 'yellow',
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

    backgroundColor: 'rgba(20, 15, 38, 0.648579)',

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
    paddingTop: 15,
    paddingBottom: 15,
    marginRight: 50,
  },
  facebookButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(20, 15, 38, 0.648579)',
    marginLeft: 50,
    borderRadius: 20,
    // marginTop: 30,
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
    // alignContent: 'space-between',
    // backgroundColor: 'green',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // top: 20,
  },
});
