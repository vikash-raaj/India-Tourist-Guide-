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
import { connect } from 'react-redux';
class AndmanCategory extends Component {

  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }


 render() {
   return (



<ScrollView>
     <View style={styles.container}>
     <View style={styles.container1}>
     <Image
     style={{width: 280, height: 170,marginLeft:40,marginTop:30,}}
          source={require('../images/fort.jpg')}>

          </Image>
          <TouchableOpacity
            style={styles.button1}
            onPress={()=>this.props.navigation.navigate('Patna')}
          >
            <Text>FORTS</Text>

          </TouchableOpacity>
          </View>
          <View style={styles.container2}>
          <Image
          style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
               source={require('../images/temple.jpg')}>

               </Image>
               <TouchableOpacity
                 style={styles.button2}
                 onPress={()=>this.props.navigation.navigate('#')}
               >
                 <Text>TEMPLES</Text>

               </TouchableOpacity>
               </View>
<View style={styles.container1}>
               <Image
               style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                    source={require('../images/nature.jpg')}>

                    </Image>
                    <TouchableOpacity
                      style={styles.button1}
                      onPress={()=>this.props.navigation.navigate('#')}
                    >
                      <Text>NATURE</Text>

                    </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                    <Image
                    style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                         source={require('../images/museums.jpg')}>

                         </Image>
                         <TouchableOpacity
                           style={styles.button2}
                           onPress={()=>this.props.navigation.navigate('#')}
                         >
                           <Text>MUSEUMS</Text>

                         </TouchableOpacity>
                         </View>
                         <View style={styles.container1}>
                         <Image
                         style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                              source={require('../images/fun.jpg')}>

                              </Image>
                              <TouchableOpacity
                                style={styles.button1}
                                onPress={()=>this.props.navigation.navigate('#')}
                              >
                                <Text>FUN</Text>

                              </TouchableOpacity>
                              </View>
                              <View style={styles.container2}>
                              <Image
                              style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                                   source={require('../images/lakes.jpg')}>

                                   </Image>
                                   <TouchableOpacity
                                     style={styles.button2}
                                     onPress={()=>this.props.navigation.navigate('#')}
                                   >
                                     <Text>LAKES</Text>

                                   </TouchableOpacity>
                                   </View>
                                   <View style={styles.container1}>
                                   <Image
                                   style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                                        source={require('../images/wildlife.jpg')}>

                                        </Image>
                                        <TouchableOpacity
                                          style={styles.button1}
                                          onPress={()=>this.props.navigation.navigate('#')}
                                        >
                                          <Text>WILDLIFE</Text>

                                        </TouchableOpacity>
                                        </View>



       <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>
      </View>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',


  },
  container1: {
    flex: 1,
    justifyContent: 'center',

backgroundColor:'#E7826D'
  },


  container2: {
    flex: 1,
    justifyContent: 'center',

backgroundColor:'#807674'
  },


  button1: {
    alignItems: 'center',
    backgroundColor: '#E7826D',
    padding: 20,
    marginTop:5,

  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#807674',
    padding: 20,
    marginTop:5,

  },



  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF0000'
  }
})

export default AndmanCategory;
