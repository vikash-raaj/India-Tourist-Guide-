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
import { connect } from 'react-redux';
class Delhi extends Component {

  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }


 render() {
   return (



     <View style={styles.container}>

       <TouchableOpacity
         style={styles.button}
         onPress={()=>this.props.navigation.navigate('CategoryIndiagateDirection')}
       >
         <Text>Direction</Text>

       </TouchableOpacity>



       <View style={styles.container2}>
       <Text style ={ styles.container3}>
       The India Gate is located in the center of New Delhi, the capital of India. It was made by Edwin Lutyens In 1921. This landmark in Delhi commemorates the members of the erstwhile British Indian Army who sacrificed their lives fighting for the Indian Empire in the Afghan Wars and World War.

After India got its independence, India Gate became the site of Amar Jawan Jyoti -Indian Army Tomb of the Unknown Soldier. It is counted among the largest war memorials in India.

The Shrine of the Amar Jawan Jyoti is burning since 1971. It represents the flame of the immortal warrior that marks the Tomb of the Unknown Soldier. The shrine is made of black marble with a rifle placed on its barrel. This rifle is crested by a soldiers helmet. The words- "Amar Jawan" (Immortal Warrior) is inscribed in gold on each face of the cenotaph which is placed on an edifice. The edifice has four torches on its four corners, these torches are kept alive.



       </Text>

  </View>

      </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'red',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffcc66',
    padding: 25,
    marginTop:20,

  },

  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF0000'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
backgroundColor:'white'
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingTop:20,
    fontSize:20,

    color:'red',

  },
})

export default Delhi;
