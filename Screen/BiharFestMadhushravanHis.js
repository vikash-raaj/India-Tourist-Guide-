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
          source={require('../images/Madhushravan.jpg')}>

</Image>
<ScrollView>


     <Text style ={ styles.container1}>
     Madhushravani festival is very sweet .The Madhusravani is celebrated in the rainy month of the Savan.The newly -married brides hear Madhushravani Katha from the elderly ladies for 15 days.There is the famous cycle of Vrata kathas in Mithila called Madhushravani vratakatha. This Vratakatha is told in fifteen cantos and is completely recited in about fifteen days.The stories narrated during the Madhusravani includes Satik Katha; Pativrata Sunaynak Katha; Bala-Basantak Katha etc. and perhaps the best story related to Madhushravani is Brihaspati- Ka Shesha, a story based on the superstition that the latter part of Thursday is inauspicious for undertaking any good work.
In Mithila, during this festival, charming songs of Madhushravani is resounded among the mango groves and in the courtyards of the villages. The air is filled with the intoxicating fragrance of the finery of new brides — red, pink, and yellow saris drying and flapping in.

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
