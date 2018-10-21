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
          source={require('../images/Bihula.jpg')}>

</Image>
<ScrollView>


     <Text style ={ styles.container1}>
      Behula is the protagonist in the Shiva Purana and the Manasamangal genre of Bengali medieval epics. A number of works belonging to this genre were written between the thirteenth and eighteenth centuries. Though the religious purpose of these works is to eulogise the Hindu goddess Manasa, these works are more well known for depicting the love story of Behula and her husband Lakhindar (or Lakshindar or Lakshmindara).
      Bihula is worshipped like a goddess on Nag Panchami day, the fifth day of Shravan month. The festival is associated with  story of Bihula, who was widowed on the night of her wedding by snake-bite through the machinations of Manasa, the Snake-Goddess (who was inimical to Bihula's father-in-law, the merchant Chandradhara). The innocent but firm Bihula decided to be remain with his dead body on a raft in the river Ganga. Finding no other alternative, Yama gave permission to Bihula. She started her voyage on a raft along with her Lakhinder's dead body.Finally, Bihula went to heaven by dint of her chastity and got her husband back to life.

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
