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
          source={require('../images/SamaChakeva.jpg')}>

</Image>
<ScrollView>


     <Text style ={ styles.container1}>
    It is during the winter season that the birds from the Himalayas migrate towards the plains. With the advent of these colorful birds, celebration of sama–chakeva is done.
    This is a festival especially celebrated in mithila.
    mithilanchal dedicates this festival to the celebration of the brother sister relationship.
    It represents the tradition of this land as well as the art of making idols.
    This festival starts with the welcoming of the pair of birds sama-chakeva. Girls make clay idols of various birds and decorate them in their own traditional ways.
     Various rituals are performed and the festival joyfully ended with the ‘vidai’ of sama and with a wish that these birds return to this land the next year

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
