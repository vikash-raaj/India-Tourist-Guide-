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

class AndmanHistory extends Component {


 render() {
   return (



     <View style={styles.container}>
     <ScrollView>
     <Text style ={ styles.container1}>
     The Andaman Islands are an Indian archipelago in the Bay of Bengal. These roughly 300 islands are known for their palm-lined, white-sand beaches, mangroves and tropical rainforests. Coral reefs supporting marine life such as sharks and rays make for popular diving and snorkeling sites. Indigenous Andaman Islanders inhabit the more remote islands, many of which are off limits to visitors.
   Wildlife sanctuaries include the Mahatma Gandhi Marine National Park, home to mangrove forests, coral reefs and a cluster of islands. Cellular Jail, a colonial prison where British authorities held freedom fighters during the Indian struggle for independence, is a national memorial in Port Blair, the Andaman Islands capital. Havelock Island, with beach resorts, is prized for its snorkeling and scuba spots. To its south is laid-back Neil Island. Ross Island is home to the ruins of the British administrative headquarters, abandoned in the mid-20th century following an earthquake.
    The Andaman and Nicobar Islands, located in the east of the Indian mainland geographically, float in splendid isolation in the Bay of Bengal. Once a hill range extending from Myanmar to Indonesia, these picturesque undulating islands, islets numbering around 572, are covered with dense rain-fed, damp and evergreen forests and endless varieties of exotic flora and fauna. Most of these islands (about 550) are in the Andaman Group, 28 of which are inhabited. The smaller Nicobars, comprise some 22 main islands (10 inhabited). The Andaman and Nicobars are separated by the Ten Degree Channel which is 150 Kms. wide.
   These islands also boast of freedom fighting days’ historically significant landmarks viz. Cellular Jail, Ross Island, Viper Island, Hopetown and Mount Harriet. The Andaman and Nicobar Islands have been declared as two of the 218 endemic bird area of the world. As many as 270 species and sub-species of birds have been reported existing in these islands, 106 of them being endemic. The Andaman Wood Pigeon, Andaman Padauk and Dugong are declared as State Bird, State Tree and State Animal respectively. There are about 96 Wildlife Sanctuaries, nine National Parks and one Biosphere Reserve in the islands. These islands are blessed with the bounties of both south-west and north-east monsoons.


     </Text>
     </ScrollView>
</View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
backgroundColor:'green'
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingTop:20,
    fontSize:20,

    color:'red',

  },
})

export default AndmanHistory;
