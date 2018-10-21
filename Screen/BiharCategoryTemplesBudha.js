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
       Bodh Gaya is the holiest of Buddhist destinations and a World Heritage Site. It was here, under a pipal, or bodhi tree, that Siddhartha Gotama attained enlightenment and became the Buddha. A simple shrine was built by the emperor Ashoka (3rd century BCE) to mark the spot, later enclosed by a stone railing 1st century BCE), part of which still remains. The uprights have representations of the Vedic gods Indra and Surya, and the railing medallions include carvings of imaginary beasts. This shrine was replaced in the Kushan period (2nd cent. CE) by the present Mahabodhi temple, which was refurbished in the Pala-Sena period (750-1200), heavily restored by Sir Alexander Cunningham in the second half of the 19th century, and finally restored by Myanmar (Burmese) Buddhists in 1882. The bodhi tree behind the temple is believed to be a descendant of the original



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
