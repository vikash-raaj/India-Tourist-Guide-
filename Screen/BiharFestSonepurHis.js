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
          source={require('../images/sonepurmela.jpg')}>

</Image>
<ScrollView>


     <Text style ={ styles.container1}>
      An annual cattle fair that titles to one of the biggest in Asia, Sonepur Mela is the pride of northern Bihar. The fair is held on the banks of the sacred river Ganga, where it confluences with its tributary, Gandak. Going by the pattern of the stars, the fair takes place on the auspicious dates of Kartik Poornima (full moon day) in the month of November every year. Some prefer to call this prehistoric fair as Harihar Kshetra Mela. The fair acts as a selling ground of not only cattle, but breeds of dogs, elephants, birds and camels also become part of the attractions.
      Sonepur Mela has its origins traced back to the times of Chandragupta Maurya, the first ruler of India. Historians believe that the emperor used this fair as an opportunity to make purchases of elephants and horses for his huge army. The cattle fair also beholds a mythological narration about its history. As per the legend, there were two brothers; both utmost devotees of Lord Vishnu, enchanted a magical spell on each other accidentally. As a result, one turned into an honest elephant, while the other a ferocious crocodile.

  Once during a full moon day, the elephant was enjoying a bath at this very confluence of rivers. Moments later, it was attacked by the crocodile. Sensing the trouble of the elephant, Lord Vishnu had to intervene to push the chariot of victory of the good over evil. Thus, in the present day, Sonepur Mela along with its cattle trading supremacy, holds a religious angle as well.
  Just like Rajasthan speaks about its camels in the Pushkar fair, Sonepur Mela has an extensive range of decorated elephants, all lined up for sale as its star attraction. These giant yet gentle creatures are all made to settle in the Haathi Bazaar (elephant market), where tourists can touch and feed them while the auction is on. Besides, this vibrant fair dominates with different variety of birds, poultries, cattles, the stalls of which all smeared up in the colorful attires of a fancy handicraft store. Stalls at the Sonepur Mela get all loaded with items like agricultural implements, garments, perfumes, handicrafts, utensils in wood and brass.

The religious side of the Sonepur Mela brings thousands of Hindu pilgrims and devotees for the sacred dip at the confluence of river Ganga and river Gandak. It is believed that taking a dip here, particularly at the auspicious time of full moon purifies oneself from within his inner self.

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
