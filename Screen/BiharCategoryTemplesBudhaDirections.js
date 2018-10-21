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
      source ={{uri:'https://www.google.co.in/maps/search/buddha+mandir+gaya+bihar/@24.7286493,84.9580549,13z/data=!3m1!4b1'} }
      />
    );
  }
}
