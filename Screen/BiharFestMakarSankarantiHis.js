import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Icon,
  Button,
  Image,
  ScrollView,
} from 'react-native'

class ChhathHis extends Component {


 render() {
   return (



     <View style={styles.container}>

     <Image
     style={{width: 360, height: 260,marginTop:2}}
          source={require('../images/makarsankranti.jpg')}>

</Image>
<ScrollView>


     <Text style ={ styles.container1}>


     Makar Sankranti, also known as Makara Sankrānti (Sanskrit: मकर सङ्क्रान्ति) or Maghi, is a festival day in the Hindu calendar, in reference to deity Surya (sun). It is observed each year in January. It marks the first day of sun transit into the Makara (Capricorn), marking the end of the month with the winter solstice and the start of longer days.

   Makar Sankranti is one of the few ancient Indian festivals that has been observed according to solar cycles, while most festivals are set by the lunar cycle of the lunisolar Hindu calendar. Being a festival that celebrates the solar cycle, it almost always falls on the same Gregorian date every year (January 14), except in some years when the date shifts by a day for that year. The festivities associated with Makar Sankranti are known by various names such as Maghi (preceded by Lohri) by north Indian Hindus and Sikhs, Makara Sankranti (Pedda Pandaga) in Karnataka and Andhra Pradesh, Sukarat in central India, Magh Bihu by Assamese, and Pongal by Tamils

     </Text>
     <TouchableOpacity
       style={styles.button}
       onPress={()=>this.props.navigation.navigate('ChhathPujaWeb')}
     >
       <Text>More</Text>
   </TouchableOpacity>
     </ScrollView>
</View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

backgroundColor:'#E7826D'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,

  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingTop:20,
    paddingHorizontal:15,
    fontSize:20,
    color:'white',

  },
})

export default ChhathHis;
