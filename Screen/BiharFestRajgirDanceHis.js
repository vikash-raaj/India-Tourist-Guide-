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

class ChhathHis extends Component {


 render() {
   return (



     <View style={styles.container}>

     <Image
     style={{width: 360, height: 260,marginTop:2}}
          source={require('../images/rajgirdance.jpg')}>

</Image>
<ScrollView>


     <Text style ={ styles.container1}>
    Rajgir Mahotsav (festival), formerly Rajgir Nritaya (Dance) Mahotsav[3][4] is a festival of dance and music. It was started in 1986, is an annual three-day event at Rajgir in Bihar, India.
    It is organized by Nalanda district administration with the help of Government of Bihar’s Department of Culture and Bihar State Tourism Development Corporation.
    क्या होता है मलमास
    विद्वानों के अनुसार, हर तीसरे वर्ष में अधिक मास होता है. सूर्य के एक राशि से दूसरे राशि में प्रवेश को संक्रांति होना कहा जाता है. सौर मास 12 और राशियां भी 12 होती हैं. जब दो पक्षों में संक्रांति नहीं होती, तब अधिक मास होता है. यह स्थिति 32 माह 16 दिन में एक यानि हर तीसरे वर्ष बनती है. इस अधिक मास को मलमास या पुरुषोत्तम मास कहा जाता है. मलमास में एक माह तक मांगलिक कार्य तो वर्जित रहते हैं, लेकिन भगवान की आराधना, जप-तप, तीर्थ यात्रा करने से ईश्वर की कृपा प्राप्त होती है. इस मास में भगवान शिव और विष्णु की अराधना बेहद फलदायी होती है.
    मलमास मेले की महत्ता
    वैसे तो राजगीर में धार्मिक महत्ता के 22 कुंड व 52 धाराएं हैं। लेकिन ब्रह्मकुंड व सप्तधाराओं में स्नान की विशेष महत्ता है। देश व विदेश के श्रद्धालु यहां के कुंडों में स्नान व पूजा-पाठ कर मेले का धार्मिक लाभ उठाते हैं। अधिकतर श्रद्धालु यहां के सभी कुंडों में पूरे विधि-विधान से स्नान व पूजा-पाठ करते हैं।
    बताया जाता है कि भगवान ब्रह्मा के पुत्र राजा बसु ने इस पवित्र स्थल पर महायज्ञ कराया था। उस महायज्ञ के दौरान उन्होंने 33 करोड़ देवी-देवताओं को आमंत्रण दिया था। लेकिन भूलवश काग महाराज को न्योता देना भूल गये थे। इसके कारण महायज्ञ में काग महाराज शामिल नहीं हुए। उसके बाद से मलमास मेले के दौरान राजगीर के आसपास काग महाराज कहीं दिखायी नहीं देते हैं।
    राजगीर के 22 कुंडों के नाम
    ब्रह्मकुंड, सप्तधारा, व्यास, अनंत, मार्केण्डेय, गंगा-यमुना, काशी, सूर्य, चन्द्रमा, सीता, राम-लक्ष्मण, गणेश, अहिल्या, नानक, मखदुम, सरस्वती, अग्निधारा, गोदावरी, वैतरणी, दुखहरनी, भरत और शालीग्राम कुंड।
    इन महत्वपूर्ण स्थलों की कर सकते हैं सैर
    विश्व शांति स्तूप, सोन भंडार, जरासंध का अखाड़ा, बिम्बिसार की जेल, नौलखा मंदिर, जापानी मंदिर, रोपवे, घोड़ाकटोरा डैम, वेणुवन, वीरायतन, मणियार मठ, श्रीकृष्ण भगवान के रथ के चक्कों के निशान, सुरक्षा दीवार, जेठियन बुद्ध पथ, बाबा सिद्धनाथ का मंदिर, सप्तपर्णी गुफा, गृद्धकूट पर्वत, जैन मंदिर।


     </Text>
     <TouchableOpacity
       style={styles.button}
       onPress={()=>this.props.navigation.navigate('ChhathPujaWeb')}
     >
       <Text>More</Text>
   </TouchableOpacity>
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
    backgroundColor: 'transparent',
    padding: 10,

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

export default ChhathHis;
