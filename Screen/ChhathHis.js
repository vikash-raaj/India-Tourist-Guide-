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
          source={require('../images/chhath.jpg')}>

</Image>
<ScrollView>


     <Text style ={ styles.container1}>
      Almost all civilizations have worshipped the ‘sun god’, but it has a unique form in Bihar.
      Chatth Puja is the only occasion where the setting sun is worshipped.The people of Bihar have immense faith in this festival.
      It is celebrated twice a year.
      Once in Chaitra (according to the Hindu calendar) which falls in March and in Kartik which falls in November.
      For this 4-day festival, people maintain sanctity and purity from even a month ahead.
      People celebrate this festival with immense faith the folk songs sung in the honour of ‘Surya Dev’ and ‘Chatti Maiyya’ can be heard at every nook and corner the sweetness of the songs lets you feel the holiness of the festival.

Women fast for the good of their family and the society.
Regardless of the social status, to celebrate this festival only the faith counts.
Though it is a festival of the Hindus, some of the Muslims also participate actively in the puja.

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
