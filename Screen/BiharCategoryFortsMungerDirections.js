import React, { Component} from 'react';
import {DrawerNavigator} from 'react-navigation'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
   ScrollView
} from 'react-native';

export default  class AwesomeProject extends Component {
  render(){
    return(
      <WebView
      source ={{uri:'https://www.google.co.in/maps/place/Jama+Masjid/@18.5678777,73.691104,11z/data=!4m8!1m2!2m1!1sjama+masjid!3m4!1s0x3bc2bf537f9c37cf:0x26309aba3e816!8m2!3d18.5719111!4d73.8358873'} }
      />
    );
  }
}
