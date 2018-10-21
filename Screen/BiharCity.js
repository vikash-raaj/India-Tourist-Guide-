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
class BiharCity extends Component {

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

          source={require('../images/patna.jpg')}>

          </Image>
          <TouchableOpacity
            style={styles.button1}
            onPress={()=>this.props.navigation.navigate('#')}
          >
            <Text>PATNA</Text>

          </TouchableOpacity>
          </View>
          <View style={styles.container2}>
          <Image
          style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
               source={require('../images/Bodhgaya.jpg')}>

               </Image>
               <TouchableOpacity
                 style={styles.button2}
                 onPress={()=>this.props.navigation.navigate('#')}
               >
                 <Text>BODHGAYA</Text>

               </TouchableOpacity>
               </View>
<View style={styles.container1}>
               <Image
               style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                    source={require('../images/bhagalpur.jpg')}>

                    </Image>
                    <TouchableOpacity
                      style={styles.button1}
                      onPress={()=>this.props.navigation.navigate('#')}
                    >
                      <Text>BHAGALPUR</Text>

                    </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                    <Image
                    style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                         source={require('../images/rajgir.jpg')}>

                         </Image>
                         <TouchableOpacity
                           style={styles.button2}
                           onPress={()=>this.props.navigation.navigate('#')}
                         >
                           <Text>RAJGIR</Text>

                         </TouchableOpacity>
                         </View>
                         <View style={styles.container1}>
                         <Image
                         style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                              source={require('../images/nalanda.jpg')}>

                              </Image>
                              <TouchableOpacity
                                style={styles.button1}
                                onPress={()=>this.props.navigation.navigate('#')}
                              >
                                <Text>NALANDA</Text>

                              </TouchableOpacity>
                              </View>
                              <View style={styles.container2}>
                              <Image
                              style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                                   source={require('../images/munger.jpg')}>

                                   </Image>
                                   <TouchableOpacity
                                     style={styles.button2}
                                     onPress={()=>this.props.navigation.navigate('#')}
                                   >
                                     <Text>MUNGER</Text>

                                   </TouchableOpacity>
                                   </View>
                                   <View style={styles.container1}>
                                   <Image
                                   style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                                        source={require('../images/pawapuri.jpg')}>

                                        </Image>
                                        <TouchableOpacity
                                          style={styles.button1}
                                          onPress={()=>this.props.navigation.navigate('#')}
                                        >
                                          <Text>PAWAPURI</Text>

                                        </TouchableOpacity>
                                        </View>
                                        <View style={styles.container2}>
                                        <Image
                                        style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                                             source={require('../images/darbhanga.jpg')}>

                                             </Image>
                                             <TouchableOpacity
                                               style={styles.button2}
                                               onPress={()=>this.props.navigation.navigate('#')}
                                             >
                                               <Text>DARBHANGA</Text>

                                             </TouchableOpacity>
                                             </View>
                                             <View style={styles.container1}>
                                             <Image
                                             style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                                                  source={require('../images/sonpur.jpg')}>

                                        </Image>
                                                  <TouchableOpacity
                                                    style={styles.button1}
                                                    onPress={()=>this.props.navigation.navigate('#')}
                                                  >
                                                    <Text>SONEPUR</Text>

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

backgroundColor:'#E7826D',

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

export default BiharCity;
