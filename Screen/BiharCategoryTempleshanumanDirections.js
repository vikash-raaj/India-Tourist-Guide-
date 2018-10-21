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
      source ={{uri:'https://www.google.co.in/maps?rlz=1C1CHBD_enIN770IN770&q=hanuman+mandir+patna&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjyvKeh2qfdAhWJOo8KHRoTCC8Q_AUICygC'} }
      />
    );
  }
}
