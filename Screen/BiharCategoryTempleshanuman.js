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
       Mahavir Mandir is the second largest religious shrine in North India. It is one of the leading temples dedicated to the worship of Lord Hanuman. Thousands of devotees from different parts of the country flock in here daily to offer prayer to and seek the blessings of Bajrang Bali. It is believed that Sankat Mochan Hanuman listens to the prayers of his faithful devotees hence if worshipped with a pure heart no wishes of yours would be left unfulfilled. Therefore,  it is also known as Manokamna Temple.



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
