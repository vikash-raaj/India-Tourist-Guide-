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
  ImageBackground,
} from 'react-native'

class BiharHistory extends Component {


 render() {
   return (



     <View style={styles.container}>

     <Image
     style={{width: 360, height: 260,marginTop:2}}
          source={require('../images/sonpur.jpg')}>

</Image>
<ScrollView>
<ImageBackground
style={{width: 360, height: 260,marginTop:2}}
     source={require('../images/sonpur.jpg')}>
     <Text style ={ styles.container1}>
        Bihar is the state in the East India.
        The Bihar plan is is divided into two parts by the river Ganges which folws
        through the middle from west to east.
        The Captital of the state is Patna. it is denoted as "The Land of Buddha",
        has a rich cultural heritage which is evident from the numerious
        ancient monuments that are spread throughout the state.
     </Text>

</ImageBackground>
<ImageBackground
style={{width: 360, height: 260,marginTop:2}}
     source={require('../images/sonpur.jpg')}>

</ImageBackground>

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
    backgroundColor: '#ffcc66',
    padding: 20,

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

export default BiharHistory;
