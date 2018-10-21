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
          source={require('../images/kalachakara.jpg')}>

</Image>
<ScrollView>


     <Text style ={ styles.container1}>
     Bodhgaya is the same place where Lord Buddha stayed for and attained enlightenment.
     It is where the Bodhgaya Festival is held every year for 10 days.
     If we agree to what Vajrayana Buddhism says then this festival is related to the cycle of time.
     It covers every thing from breathing, to what happens in the environment, rebirth.
     People at this place vow to be kind to other human beings and animals as well.
During the celebration of the festival meditation, vows, prayers and dances take place.
The main motive of this festival is to bring peace in the world.
Even Dalai Lama comes to grace this festival. Positivity is spread across through this festival.
People from across the globe come to be a part of this festival.

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
