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
class AndmanFestival extends Component {

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
          source={require('../images/chhath.jpg')}>

          </Image>
          <TouchableOpacity
            style={styles.button1}
            onPress={()=>this.props.navigation.navigate('ChhathHis')}
          >
            <Text>CHHATH PUJA FESTIVAL</Text>

          </TouchableOpacity>
          </View>
          <View style={styles.container2}>
          <Image
          style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
               source={require('../images/kalachakara.jpg')}>

               </Image>
               <TouchableOpacity
                 style={styles.button2}
                 onPress={()=>this.props.navigation.navigate('BiharFestKalachakaraHis')}
               >
                 <Text>KALACHAKARA FESTIVAL</Text>

               </TouchableOpacity>
               </View>
<View style={styles.container1}>
               <Image
               style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                    source={require('../images/sonepurmela.jpg')}>

                    </Image>
                    <TouchableOpacity
                      style={styles.button1}
                      onPress={()=>this.props.navigation.navigate('BiharFestSonepurHis')}
                    >
                      <Text>SONPUR MELA</Text>

                    </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                    <Image
                    style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                         source={require('../images/rajgirdance.jpg')}>

                         </Image>
                         <TouchableOpacity
                           style={styles.button2}
                           onPress={()=>this.props.navigation.navigate('BiharFestRajgirDanceHis')}
                         >
                           <Text>RAJGIR DANCE FESTIVAL</Text>

                         </TouchableOpacity>
                         </View>
                         <View style={styles.container1}>
                         <Image
                         style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                              source={require('../images/makarsankranti.jpg')}>

                              </Image>
                              <TouchableOpacity
                                style={styles.button1}
                                onPress={()=>this.props.navigation.navigate('BiharFestMakarSankarantiHis')}
                              >
                                <Text>MAKAR-SANKRANTI</Text>

                              </TouchableOpacity>
                              </View>
                              <View style={styles.container2}>
                              <Image
                              style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                                   source={require('../images/SamaChakeva.jpg')}>

                                   </Image>
                                   <TouchableOpacity
                                     style={styles.button2}
                                     onPress={()=>this.props.navigation.navigate('BiharFestSamaChakevaHis')}
                                   >
                                     <Text>SAMA-CHAKEVA</Text>

                                   </TouchableOpacity>
                                   </View>
                                   <View style={styles.container1}>
                                   <Image
                                   style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                                        source={require('../images/Bihula.jpg')}>

                                        </Image>
                                        <TouchableOpacity
                                          style={styles.button1}
                                          onPress={()=>this.props.navigation.navigate('BiharFestBihulaHis')}
                                        >
                                          <Text>BIHULA</Text>

                                        </TouchableOpacity>
                                        </View>
                                        <View style={styles.container2}>
                                        <Image
                                        style={{width: 280, height: 170,marginLeft:40,marginTop:20}}
                                             source={require('../images/Madhushravan.jpg')}>

                                             </Image>
                                             <TouchableOpacity
                                               style={styles.button2}
                                               onPress={()=>this.props.navigation.navigate('BiharFestMadhushravanHis')}
                                             >
                                               <Text>MADHUSHRAVAN</Text>

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

backgroundColor:'#302f2e'
  },


  button1: {
    alignItems: 'center',
    backgroundColor: '#E7826D',
    padding: 20,
    marginTop:5,

  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#302f2e',
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

export default AndmanFestival;
