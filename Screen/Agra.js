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
} from 'react-native'
import { connect } from 'react-redux';
class Agra extends Component {

  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }


 render() {
   return (



     <View style={styles.container}>

       <TouchableOpacity
         style={styles.button}
         onPress={()=>this.props.navigation.navigate('IITJEE')}
       >
         <Text>HISTORY</Text>

       </TouchableOpacity>

       <TouchableOpacity
         style={styles.button}
         onPress={()=>this.props.navigation.navigate('CACPT')}
       >
         <Text> CITIES </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.button}
         onPress={()=>this.props.navigation.navigate('NEET')}
       >
         <Text>CATEGORIES </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.button}
         onPress={()=>this.props.navigation.navigate('CAFOUNDATION')}
       >
         <Text> FESTIVALS</Text>
       </TouchableOpacity>



       <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
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
    backgroundColor: 'red'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffcc66',
    padding: 30,
    marginTop:20,

  },

  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF0000'
  }
})

export default Agra;
