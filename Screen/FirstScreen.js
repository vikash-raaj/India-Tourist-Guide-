import React from 'react';
import { StyleSheet, Text, View, ImageBackground,screenWidth, Image,ScrollView,TouchableOpacity} from 'react-native';

 class FirstScreen extends React.Component {
   constructor(props) {
   super(props)
   this.state = { count: 0 }
 }
  render() {
    return (

      <ImageBackground
      style={{width: 500, height: 580}}
     source={require('../backgroundimage.jpg')}>
     <ScrollView>
  <Image
  style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
       source={require('../images/States/bihar.jpg')}>

       </Image>
       <View style={styles.container}>
       <TouchableOpacity
            style={styles.button}
            onPress={()=>this.props.navigation.navigate('Bihar')}
          >
            <Text>BIHAR                                                     </Text>

          </TouchableOpacity>
          <View style={[styles.countContainer]}>
  <Text style={[styles.countText]}>
     { this.state.count !== 0 ? this.state.count: null}
   </Text>
 </View>
           </View>
       <Image
       style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
            source={require('../images/States/delhi.jpg')}>

            </Image>
            <View style={styles.container}>
            <TouchableOpacity
                 style={styles.button}
                 onPress={()=>this.props.navigation.navigate('Delhi')}
               >
                 <Text>Delhi</Text>

               </TouchableOpacity>
               <View style={[styles.countContainer]}>
       <Text style={[styles.countText]}>
          { this.state.count !== 0 ? this.state.count: null}
        </Text>
      </View>
                </View>
            <Image
            style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
                 source={require('../images/States/agra.jpg')}>

                 </Image>
                 <View style={styles.container}>
                 <TouchableOpacity
                      style={styles.button}
                      onPress={()=>this.props.navigation.navigate('Agra')}
                    >
                      <Text>AGRA</Text>

                    </TouchableOpacity>
                    <View style={[styles.countContainer]}>
            <Text style={[styles.countText]}>
               { this.state.count !== 0 ? this.state.count: null}
             </Text>
           </View>
                     </View>
                 <Image
                 style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
                      source={require('../images/States/jaipur.jpg')}>

                      </Image>
                      <View style={styles.container}>
                      <TouchableOpacity
                           style={styles.button}
                           onPress={()=>this.props.navigation.navigate('Rajasthan')}
                         >
                           <Text>Rajasthan</Text>

                         </TouchableOpacity>
                         <View style={[styles.countContainer]}>
                 <Text style={[styles.countText]}>
                    { this.state.count !== 0 ? this.state.count: null}
                  </Text>
                </View>
                          </View>
                      <Image
                      style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
                           source={require('../images/States/UP.jpg')}>

                           </Image>
                           <View style={styles.container}>
                           <TouchableOpacity
                                style={styles.button}
                                onPress={()=>this.props.navigation.navigate('UtterPradesh')}
                              >
                                <Text>U.P</Text>

                              </TouchableOpacity>
                              <View style={[styles.countContainer]}>
                      <Text style={[styles.countText]}>
                         { this.state.count !== 0 ? this.state.count: null}
                       </Text>
                     </View>
                               </View>
                           <Image
                           style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
                                source={require('../images/States/kolkatta.jpg')}>

                                </Image>
                                <View style={styles.container}>
                                <TouchableOpacity
                                     style={styles.button}
                                     onPress={()=>this.props.navigation.navigate('WestBangal')}
                                   >
                                     <Text>WestBangal</Text>

                                   </TouchableOpacity>
                                   <View style={[styles.countContainer]}>
                           <Text style={[styles.countText]}>
                              { this.state.count !== 0 ? this.state.count: null}
                            </Text>
                          </View>
  </View>

  <Image
  style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
       source={require('../images/States/andaman.jpg')}>

       </Image>
       <View style={styles.container}>
       <TouchableOpacity
            style={styles.button}
            onPress={()=>this.props.navigation.navigate('Andman')}
          >
            <Text>ANDAMAN & NICOBAR ISLANDS</Text>

          </TouchableOpacity>
          <View style={[styles.countContainer]}>
  <Text style={[styles.countText]}>
     { this.state.count !== 0 ? this.state.count: null}
   </Text>
 </View>
 </View>
 <Image
 style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
      source={require('../images/States/andhra.jpg')}>

      </Image>
      <View style={styles.container}>
      <TouchableOpacity
           style={styles.button}
           onPress={()=>this.props.navigation.navigate('AndraPradesh')}
         >
           <Text>ANDHRA PRADESH</Text>

         </TouchableOpacity>
         <View style={[styles.countContainer]}>
 <Text style={[styles.countText]}>
    { this.state.count !== 0 ? this.state.count: null}
  </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/arunchal.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('ArunchalPradesh')}
        >
          <Text>ARUNACHAL PRADESH</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/assam.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Assam')}
        >
          <Text>ASSAM</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/CHHATTISGARH.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('chhattisgarh')}
        >
          <Text>CHHATTISGARH</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/CHANDIGARH.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Chandigarh')}
        >
          <Text>CHANDIGARH</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/dadar.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Dadar')}
        >
          <Text>DADAR AND NAGAR HAVELI</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/daman.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Daman')}
        >
          <Text>DAMAN AND DIU</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/goa.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Goa')}
        >
          <Text>GOA</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/gujarat.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('gujarat')}
        >
          <Text>GUJARAT</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/haryana.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Haryana')}
        >
          <Text>HARYANA</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/himanchal.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Himanchal')}
        >
          <Text>HIMANCHAL PRADESH</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/jammu.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Jammu')}
        >
          <Text>JAMMU & KASHMIR</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/jharkhand.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Jharkhand')}
        >
          <Text>JHARKHAND</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/karnataka.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('karnataka')}
        >
          <Text>KARNATAKA</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/kerala.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Kerala')}
        >
          <Text>KERALA</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/lakshadweep.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Lakshadweep')}
        >
          <Text>LAKSHADWEEP</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/madhyapradesh.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('MadhyaPradesh')}
        >
          <Text>MADHYA PRADESH</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/maharashtra.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Mahasashtra')}
        >
          <Text>MAHARASHTRA</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/manipur.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Manipur')}
        >
          <Text>MANIPUR</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View><Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/meghalaya.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('meghalaya')}
        >
          <Text>MEGHALAYA</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View>
<Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/mizoram.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('mizoram')}
        >
          <Text>MIZORAM</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View>

<Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/nagaland.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Nagaland')}
        >
          <Text>NAGALAND</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View>
<Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/odisha.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Odisha')}
        >
          <Text>ODISHA</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View>
<Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/punjab.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Punjab')}
        >
          <Text>PUNJAB</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View>
<Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/pondicherry.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Pondicherry')}
        >
          <Text>PONDICHERRY</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View>


<Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/sikkim.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Sikkim')}
        >
          <Text>SIKKIM</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View>
<Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/tamil.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Tamilnaddu')}
        >
          <Text>TAMIL NADU</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View>
<Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/tripura.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Tripura')}
        >
          <Text>TRIPURA</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View>
<Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/TELANGANA.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Telangana')}
        >
          <Text>TELANGANA</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View>
<Image
style={{width: 200, height: 200,borderRadius: 100,marginLeft:70,}}
     source={require('../images/States/uttarakhand.jpg')}>

     </Image>
     <View style={styles.container}>
     <TouchableOpacity
          style={styles.button}
          onPress={()=>this.props.navigation.navigate('Uttarakhand')}
        >
          <Text>UTTARAKHAND</Text>

        </TouchableOpacity>
        <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
   { this.state.count !== 0 ? this.state.count: null}
 </Text>
</View>
</View>
</ScrollView>
      </ImageBackground>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


    justifyContent: 'center',

  },

  button: {
    alignItems: 'center',
    backgroundColor: '#0888DA',
    padding: 20,


  },
  countContainer: {
   alignItems: 'center',
   padding: 10
 },
 countText: {
   color: '#FF0000',

 },
});

export default FirstScreen;
