import React from 'react';
import { StyleSheet,Text,View,Image, } from 'react-native';
import { StackNavigator } from 'react-navigation'
import FirstScreen from  './Screen/FirstScreen'
import bihar from './Screen/bihar'
import Delhi from './Screen/Delhi'
import Agra from './Screen/Agra'
import Rajasthan from './Screen/Rajasthan'
import RajasthanCategory from './Rajasthan/RajasthanCategory'
import RajasthanHistory from './Rajasthan/RajasthanHistory'
import RajasthanCity from './Rajasthan/RajasthanCity'
import RajasthanFestival from './Rajasthan/RajasthanFestival'



import WestBangal from './Screen/WestBangal'
import WestBangalCategory from './WestBangal/WestBangalCategory'
import WestBangalHistory from './WestBangal/WestBangalHistory'
import WestBangalCity from './WestBangal/WestBangalCity'
import WestBangalFestival from './WestBangal/WestBangalFestival'




import UtterPradesh from './Screen/UtterPradesh'




import BiharHistory from './Screen/BiharHistory'
import BiharFestivals from './Screen/BiharFestivals'
import BiharCity from './Screen/BiharCity'
import Patna from './Screen/Patna'
import BiharSound from './Screen/Bihar/BiharSound'
import BiharCategory from './Screen/BiharCategory'
import ChhathHis from './Screen/ChhathHis'
import ChhathPujaWeb from './Screen/Bihar/ChhathPujaWeb'
import BiharFestKalachakaraHis from './Screen/BiharFestKalachakaraHis'
import BiharFestSonepurHis from './Screen/BiharFestSonepurHis'
import BiharFestRajgirDanceHis from './Screen/BiharFestRajgirDanceHis'
import BiharFestMakarSankarantiHis from './Screen/BiharFestMakarSankarantiHis'
import BiharFestSamaChakevaHis from './Screen/BiharFestSamaChakevaHis'
import BiharFestBihulaHis from './Screen/BiharFestBihulaHis'
import BiharFestMadhushravanHis from './Screen/BiharFestMadhushravanHis'

import BiharCategoryTemples from './Screen/BiharCategoryTemples'
import BiharCategoryTemplesBudha from './Screen/BiharCategoryTemplesBudha'
import BiharCategoryTempleshanuman from './Screen/BiharCategoryTempleshanuman'
import BiharCategoryTemplesBudhaDirections from './Screen/BiharCategoryTemplesBudhaDirections'
import BiharCategoryTempleshanumanDirections from './Screen/BiharCategoryTempleshanumanDirections'
import BiharCategoryForts from './Screen/BiharCategoryForts'
import BiharCategoryFortsMunger from './Screen/BiharCategoryFortsMunger'
import BiharCategoryFortsNalanda from './Screen/BiharCategoryFortsNalanda'

import DelhiHistory from './Delhi/DelhiHistory'
import DelhiCategory from './Delhi/DelhiCategory'
import DelhiCategoryForts from './Delhi/DelhiCategoryForts'
import DelhiCategoryTemples from './Delhi/DelhiCategoryTemples'
import DelhiCity from './Delhi/DelhiCity'
import DelhiFestival from './Delhi/DelhiFestival'
import DelhiFortIndiaGate from './Delhi/DelhiFortIndiaGate'
import CategoryIndiagateDirection from './Delhi/CategoryIndiagateDirection'
import DelhiFortJammaMasjid from './Delhi/DelhiFortJammaMasjid'
import DelhiFortOutbMinar from './Delhi/DelhiFortOutbMinar'
import DelhiFortOutbMinarDirection from './Delhi/DelhiFortOutbMinarDirection'
import DelhiFortRashtrapatiBhavan from './Delhi/DelhiFortRashtrapatiBhavan'
import DelhiFortRashtrapatiBhavanDirection from './Delhi/DelhiFortRashtrapatiBhavanDirection'
import DelhiFortRedFort from './Delhi/DelhiFortRedFort'
import DelhiFortRedFortDirection from './Delhi/DelhiFortRedFortDirection'
import DelhiTempleAkshardhantemple from './Delhi/DelhiTempleAkshardhantemple'
import DelhiTempleAkshardhantempleDirections from './Delhi/DelhiTempleAkshardhantempleDirections'
import DelhitempleChhatarpurTemple from './Delhi/DelhitempleChhatarpurTemple'
import DelhitempleChhatarpurTempleDirections from './Delhi/DelhitempleChhatarpurTempleDirections'
import DelhiTempleLotusTemple from './Delhi/DelhiTempleLotusTemple'
import DelhiTempleLotusTempleDirections from './Delhi/DelhiTempleLotusTemple'

import Andman from './Screen/Andman'
import AndmanCategory from './Andman/AndmanCategory'
import AndmanCity from './Andman/AndmanCity'
import AndmanHistory from './Andman/AndmanHistory'
import AndmanFestival from './Andman/AndmanFestival'



import AndraPradesh from './Screen/AndraPradesh'
import AndraPradeshCategory from './AndraPradesh/AndraPradeshCategory'
import AndraPradeshCity from './AndraPradesh/AndraPradeshCity'
import AndraPradeshHistory from './AndraPradesh/AndraPradeshHistory'
import AndraPradeshFestival from './AndraPradesh/AndraPradeshFestival'



import ArunchalPradesh from './Screen/ArunchalPradesh'
import ArunchalPradeshCategory from './ArunchalPradesh/ArunchalPradeshCategory'
import ArunchalPradeshCity from './ArunchalPradesh/ArunchalPradeshCity'
import ArunchalPradeshHistory from './ArunchalPradesh/ArunchalPradeshHistory'
import ArunchalPradeshFestival from './ArunchalPradesh/ArunchalPradeshFestival'



import Assam from './Screen/Assam'
import AssamCategory from './Assam/AssamCategory'
import AssamCity from './Assam/AssamCity'
import AssamHistory from './Assam/AssamHistory'
import AssamFestival from './Assam/AssamFestival'


import chhattisgarh from './Screen/chhattisgarh'
import chhattisgarhCategory from './chhattisgarh/chhattisgarhCategory'
import chhattisgarhCity from './chhattisgarh/chhattisgarhCity'
import chhattisgarhHistory from './chhattisgarh/chhattisgarhHistory'
import chhattisgarhFestival from './chhattisgarh/chhattisgarhFestival'




import Chandigarh from './Screen/Chandigarh'
import ChandigarhHistory from './Chandigarh/ChandigarhHistory'
import ChandigarhCategory from './Chandigarh/ChandigarhCategory'
import ChandigarhCity from './Chandigarh/ChandigarhCity'
import ChandigarhFestival from './Chandigarh/ChandigarhFestival'



import Dadar from './Screen/Dadar'
import DadarCategory from './Dadar/DadarCategory'
import DadarCity from './Dadar/DadarCity'
import DadarHistory from './Dadar/DadarHistory'
import DadarFestival from './Dadar/DadarFestival'


import Daman from './Screen/Daman'
import DamanCategory from './Daman/DamanCategory'
import DamanCity from './Daman/DamanCity'
import DamanHistory from './Daman/DamanHistory'
import DamanFestival from './Daman/DamanFestival'


import Goa from './Screen/Goa'
import GoaCategory from './Goa/GoaCategory'
import GoaCity from './Goa/GoaCity'
import GoaHistory from './Goa/GoaHistory'
import GoaFestival from './Goa/GoaFestival'


import gujarat from './Screen/gujarat'
import gujaratCategory from './gujarat/gujaratCategory'
import gujaratCity from './gujarat/gujaratCity'
import gujaratHistory from './gujarat/gujaratHistory'
import gujaratFestival from './gujarat/gujaratFestival'


import Haryana from './Screen/Haryana'
import HaryanaCategory from './Haryana/HaryanaCategory'
import HaryanaCity from './Haryana/HaryanaCity'
import HaryanaHistory from './Haryana/HaryanaHistory'
import HaryanaFestival from './Haryana/HaryanaFestival'


import Himanchal from './Screen/Himanchal'
import HimanchalCategory from './Himanchal/HimanchalCategory'
import HimanchalCity from './Himanchal/HimanchalCity'
import HimanchalHistory from './Himanchal/HimanchalHistory'
import HimanchalFestival from './Himanchal/HimanchalFestival'


import Jammu from './Screen/Jammu'
import JammuCategory from './Jammu/JammuCategory'
import JammuCity from './Jammu/JammuCity'
import JammuHistory from './Jammu/JammuHistory'
import JammuFestival from './Jammu/JammuFestival'


import Jharkhand from './Screen/Jharkhand'
import JharkhandCategory from './Jharkhand/JharkhandCategory'
import JharkhandCity from './Jharkhand/JharkhandCity'
import JharkhandHistory from './Jharkhand/JharkhandHistory'
import JharkhandFestival from './Jharkhand/JharkhandFestival'


import karnataka from './Screen/karnataka'
import karnatakaCategory from './karnataka/karnatakaCategory'
import karnatakaCity from './karnataka/karnatakaCity'
import karnatakaHistory from './karnataka/karnatakaHistory'
import karnatakaFestival from './karnataka/karnatakaFestival'


import Kerala from './Screen/Kerala'
import KeralaCategory from './Kerala/KeralaCategory'
import KeralaCity from './Kerala/KeralaCity'
import KeralaHistory from './Kerala/KeralaHistory'
import KeralaFestival from './Kerala/KeralaFestival'


import Lakshadweep from './Screen/Lakshadweep'
import LakshadweepCategory from './Lakshadweep/LakshadweepCategory'
import LakshadweepCity from './Lakshadweep/LakshadweepCity'
import LakshadweepHistory from './Lakshadweep/LakshadweepHistory'
import LakshadweepFestival from './Lakshadweep/LakshadweepFestival'


import MadhyaPradesh from './Screen/MadhyaPradesh'
import MadhyaPradeshCategory from './MadhyaPradesh/MadhyaPradeshCategory'
import MadhyaPradeshCity from './MadhyaPradesh/MadhyaPradeshCity'
import MadhyaPradeshHistory from './MadhyaPradesh/MadhyaPradeshHistory'
import MadhyaPradeshFestival from './MadhyaPradesh/MadhyaPradeshFestival'


import Mahasashtra from './Screen/Mahasashtra'
import MahasashtraCategory from './Mahasashtra/MahasashtraCategory'
import MahasashtraCity from './Mahasashtra/MahasashtraCity'
import MahasashtraHistory from './Mahasashtra/MahasashtraHistory'
import MahasashtraFestival from './Mahasashtra/MahasashtraFestival'


import Manipur from './Screen/Manipur'
import ManipurCategory from './Manipur/ManipurCategory'
import ManipurCity from './Manipur/ManipurCity'
import ManipurHistory from './Manipur/ManipurHistory'
import ManipurFestival from './Manipur/ManipurFestival'



import meghalaya from './Screen/meghalaya'
import meghalayaCategory from './meghalaya/meghalayaCategory'
import meghalayaCity from './meghalaya/meghalayaCity'
import meghalayaHistory from './meghalaya/meghalayaHistory'
import meghalayaFestival from './meghalaya/meghalayaFestival'



import mizoram from './Screen/mizoram'
import mizoramCategory from './mizoram/mizoramCategory'
import mizoramCity from './mizoram/mizoramCity'
import mizoramHistory from './mizoram/mizoramHistory'
import mizoramFestival from './mizoram/mizoramFestival'



import Nagaland from './Screen/Nagaland'
import NagalandCategory from './Nagaland/NagalandCategory'
import NagalandCity from './Nagaland/NagalandCity'
import NagalandHistory from './Nagaland/NagalandHistory'
import NagalandFestival from './Nagaland/NagalandFestival'



import Odisha from './Screen/Odisha'
import OdishaCategory from './Odisha/OdishaCategory'
import OdishaCity from './Odisha/OdishaCity'
import OdishaHistory from './Odisha/OdishaHistory'
import OdishaFestival from './Odisha/OdishaFestival'



import Punjab from './Screen/Punjab'
import PunjabCategory from './Punjab/PunjabCategory'
import PunjabCity from './Punjab/PunjabCity'
import PunjabHistory from './Punjab/PunjabHistory'
import PunjabFestival from './Punjab/PunjabFestival'


import Pondicherry from './Screen/Pondicherry'
import PondicherryCategory from './Pondicherry/PondicherryCategory'
import PondicherryCity from './Pondicherry/PondicherryCity'
import PondicherryHistory from './Pondicherry/PondicherryHistory'
import PondicherryFestival from './Pondicherry/PondicherryFestival'



import Sikkim from './Screen/Sikkim'
import SikkimCategory from './Sikkim/SikkimCategory'
import SikkimCity from './Sikkim/SikkimCity'
import SikkimHistory from './Sikkim/SikkimHistory'
import SikkimFestival from './Sikkim/SikkimFestival'




import Tripura from './Screen/Tripura'
import TripuraCategory from './Tripura/TripuraCategory'
import TripuraCity from './Tripura/TripuraCity'
import TripuraHistory from './Tripura/TripuraHistory'
import TripuraFestival from './Tripura/TripuraFestival'


import Tamilnaddu from './Screen/Tamilnaddu'
import TamilnadduCategory from './Tamilnaddu/TamilnadduCategory'
import TamilnadduCity from './Tamilnaddu/TamilnadduCity'
import TamilnadduHistory from './Tamilnaddu/TamilnadduHistory'
import TamilnadduFestival from './Tamilnaddu/TamilnadduFestival'



import Telangana  from './Screen/Telangana'
import TelanganaCategory from './Telangana/TelanganaCategory'
import TelanganaCity from './Telangana/TelanganaCity'
import TelanganaHistory from './Telangana/TelanganaHistory'
import TelanganaFestival from './Telangana/TelanganaFestival'



import Uttarakhand from './Screen/Uttarakhand'
import UttarakhandCategory from './Uttarakhand/UttarakhandCategory'
import UttarakhandCity from './Uttarakhand/UttarakhandCity'
import UttarakhandHistory from './Uttarakhand/UttarakhandHistory'
import UttarakhandFestival from './Uttarakhand/UttarakhandFestival'



export default class App extends React.Component {
  render()
  {
    return(
          <AppNavigator />



  );
  }
}
const AppNavigator = StackNavigator({

  FirstScreen:{ screen: FirstScreen,
navigationOptions:{
  headerTitle:'TouristApp',
  headerStyle: {
       backgroundColor: '#302f2e',
     },
      headerTintColor: 'white',

},

},
Andman:{ screen: Andman,
navigationOptions:{
headerTitle:'Andman',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
AndmanCategory :{ screen: AndmanCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
AndmanCity :{ screen: AndmanCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
AndmanHistory :{ screen: AndmanHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
AndmanFestival :{ screen: AndmanFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


AndraPradesh:{ screen: AndraPradesh,
navigationOptions:{
headerTitle:'AndraPradesh',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

AndraPradeshCategory :{ screen: AndraPradeshCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
AndraPradeshCity:{ screen: AndraPradeshCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
AndraPradeshHistory :{ screen: AndraPradeshHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
AndraPradeshFestival :{ screen: AndraPradeshFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


ArunchalPradesh :{ screen: ArunchalPradesh ,
navigationOptions:{
headerTitle:'Arunchal Pradesh ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

ArunchalPradeshCategory :{ screen: ArunchalPradeshCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
ArunchalPradeshCity:{ screen: ArunchalPradeshCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
ArunchalPradeshHistory :{ screen: ArunchalPradeshHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
ArunchalPradeshFestival :{ screen: ArunchalPradeshFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Assam :{ screen: Assam ,
navigationOptions:{
headerTitle:'Assam ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
AssamCategory :{ screen: AssamCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
AssamCity:{ screen: AssamCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
AssamHistory :{ screen: AssamHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
AssamFestival :{ screen: AssamFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},



Bihar:{ screen: bihar,
navigationOptions:{
headerTitle:'Bihar',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


chhattisgarh:{ screen: chhattisgarh,
navigationOptions:{
headerTitle:'Chhattisgarh',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

chhattisgarhCategory :{ screen: chhattisgarhCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
chhattisgarhCity:{ screen: chhattisgarhCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
chhattisgarhHistory :{ screen: chhattisgarhHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
chhattisgarhFestival :{ screen: chhattisgarhFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Chandigarh:{ screen: Chandigarh,
navigationOptions:{
headerTitle:'Chandigarh',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

ChandigarhCategory :{ screen: ChandigarhCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
ChandigarhCity:{ screen: ChandigarhCity,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
ChandigarhHistory :{ screen: ChandigarhHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
ChandigarhFestival :{ screen: ChandigarhFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Dadar:{ screen: Dadar,
navigationOptions:{
headerTitle:'Dadar And Nagar Haveli',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

DadarCategory :{ screen: DadarCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DadarCity:{ screen: DadarCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DadarHistory :{ screen: DadarHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DadarFestival :{ screen: DadarFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},



Daman:{ screen: Daman,
navigationOptions:{
headerTitle:'Daman And Diu',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

DamanCategory :{ screen: DamanCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DamanCity:{ screen: DamanCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DamanHistory :{ screen: DamanHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DamanFestival :{ screen: DamanFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Goa:{ screen: Goa,
navigationOptions:{
headerTitle:'Goa',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

GoaCategory :{ screen: GoaCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
GoaCity:{ screen: GoaCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
GoaHistory :{ screen: GoaHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
GoaFestival :{ screen: GoaFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


gujarat:{ screen: gujarat,
navigationOptions:{
headerTitle:'Gujarat',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

gujaratCategory :{ screen: gujaratCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
gujaratCity:{ screen: gujaratCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
gujaratHistory :{ screen: gujaratHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
gujaratFestival :{ screen: gujaratFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Haryana :{ screen: Haryana ,
navigationOptions:{
headerTitle:'Haryana ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

HaryanaCategory :{ screen: HaryanaCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
HaryanaCity:{ screen: HaryanaCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
HaryanaHistory :{ screen: HaryanaHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
HaryanaFestival :{ screen: HaryanaFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Himanchal  :{ screen: Himanchal,
navigationOptions:{
headerTitle:'Himanchal Pradesh  ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

HimanchalCategory :{ screen: HimanchalCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
HimanchalCity:{ screen: HimanchalCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
HimanchalHistory :{ screen: HimanchalHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
HimanchalFestival :{ screen: HimanchalFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Jammu  :{ screen: Jammu,
navigationOptions:{
headerTitle:'Jammu & Kashmir  ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

JammuCategory :{ screen: JammuCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
JammuCity:{ screen: JammuCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
JammuHistory :{ screen: JammuHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
JammuFestival :{ screen: JammuFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},



Jharkhand  :{ screen: Jharkhand,
navigationOptions:{
headerTitle:'Jharkhand',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

JharkhandCategory :{ screen: JharkhandCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
JharkhandCity:{ screen: JharkhandCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
JharkhandHistory :{ screen: JharkhandHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
JharkhandFestival :{ screen: JharkhandFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


karnataka :{ screen:karnataka,
navigationOptions:{
headerTitle:'Karnataka',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

karnatakaCategory :{ screen: karnatakaCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
karnatakaCity:{ screen: karnatakaCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
karnatakaHistory :{ screen: karnatakaHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
karnatakaFestival :{ screen: karnatakaFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Kerala :{ screen:Kerala,
navigationOptions:{
headerTitle:'Kerala',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
KeralaCategory :{ screen: KeralaCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
KeralaCity:{ screen: KeralaCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
KeralaHistory :{ screen: KeralaHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
KeralaFestival :{ screen: KeralaFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},



Lakshadweep:{ screen:Lakshadweep,
navigationOptions:{
headerTitle:'Lakshadweep',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

LakshadweepCategory :{ screen: LakshadweepCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
LakshadweepCity:{ screen: LakshadweepCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
LakshadweepHistory :{ screen: LakshadweepHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
LakshadweepFestival :{ screen: LakshadweepFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},




MadhyaPradesh :{ screen:MadhyaPradesh ,
navigationOptions:{
headerTitle:'Madhya Pradesh ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
MadhyaPradeshCategory :{ screen: MadhyaPradeshCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
MadhyaPradeshCity:{ screen: MadhyaPradeshCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
MadhyaPradeshHistory :{ screen: MadhyaPradeshHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
MadhyaPradeshFestival :{ screen: MadhyaPradeshFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},



Mahasashtra :{ screen:Mahasashtra ,
navigationOptions:{
headerTitle:'Mahasashtra ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
MahasashtraCategory :{ screen: MahasashtraCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
MahasashtraCity:{ screen: MahasashtraCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
MahasashtraHistory :{ screen: MahasashtraHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
MahasashtraFestival :{ screen: MahasashtraFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},




Manipur :{ screen:Manipur ,
navigationOptions:{
headerTitle:'Manipur ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
ManipurCategory :{ screen: ManipurCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
ManipurCity:{ screen: ManipurCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
ManipurHistory :{ screen: ManipurHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
ManipurFestival :{ screen: ManipurFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},




meghalaya :{ screen:meghalaya ,
navigationOptions:{
headerTitle:'Meghalaya ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
meghalayaCategory :{ screen: meghalayaCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
meghalayaCity:{ screen: meghalayaCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
meghalayaHistory :{ screen: meghalayaHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
meghalayaFestival :{ screen: meghalayaFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},



mizoram :{ screen:mizoram ,
navigationOptions:{
headerTitle:'Mizoram ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

mizoramCategory :{ screen: mizoramCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
mizoramCity:{ screen: mizoramCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
mizoramHistory :{ screen: mizoramHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
mizoramFestival :{ screen: mizoramFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Nagaland :{ screen:Nagaland  ,
navigationOptions:{
headerTitle:'Nagaland  ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

NagalandCategory :{ screen: NagalandCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
NagalandCity:{ screen: NagalandCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
NagalandHistory :{ screen: NagalandHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
NagalandFestival :{ screen: NagalandFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Odisha :{ screen:Odisha  ,
navigationOptions:{
headerTitle:'Odisha  ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
OdishaCategory:{ screen: OdishaCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
OdishaCity:{ screen: OdishaCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
OdishaHistory :{ screen: OdishaHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
OdishaFestival :{ screen: OdishaFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Punjab :{ screen:Punjab  ,
navigationOptions:{
headerTitle:'Punjab  ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
PunjabCategory:{ screen: PunjabCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
PunjabCity:{ screen: PunjabCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
PunjabHistory :{ screen: PunjabHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
PunjabFestival :{ screen: PunjabFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Pondicherry :{ screen:Pondicherry  ,
navigationOptions:{
headerTitle:'Pondicherry ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

PondicherryCategory:{ screen: PondicherryCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
PondicherryCity:{ screen: PondicherryCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
PondicherryHistory :{ screen: PondicherryHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
PondicherryFestival :{ screen: PondicherryFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

Sikkim  :{ screen:Sikkim   ,
navigationOptions:{
headerTitle:'Sikkim  ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

SikkimCategory:{ screen: SikkimCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
SikkimCity:{ screen: SikkimCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
SikkimHistory :{ screen: SikkimHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
SikkimFestival :{ screen: SikkimFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Tamilnaddu  :{ screen:Tamilnaddu   ,
navigationOptions:{
headerTitle:'Tamil Nadu ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

TamilnadduCategory:{ screen: TamilnadduCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
TamilnadduCity:{ screen: TamilnadduCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
TamilnadduHistory :{ screen: TamilnadduHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
TamilnadduFestival :{ screen: TamilnadduFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Tripura  :{ screen:Tripura  ,
navigationOptions:{
headerTitle:'Tripura ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

TripuraCategory:{ screen: TripuraCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
TripuraCity:{ screen: TripuraCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
TripuraHistory :{ screen: TripuraHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
TripuraFestival :{ screen: TripuraFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Telangana  :{ screen:Telangana  ,
navigationOptions:{
headerTitle:'Telangana  ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

TelanganaCategory:{ screen: TelanganaCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
TelanganaCity:{ screen: TelanganaCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
TelanganaHistory :{ screen: TelanganaHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
TelanganaFestival :{ screen:TelanganaFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


Uttarakhand   :{ screen:Uttarakhand   ,
navigationOptions:{
headerTitle:'Uttarakhand   ',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

UttarakhandCategory:{ screen: UttarakhandCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
UttarakhandCity:{ screen: UttarakhandCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
UttarakhandHistory :{ screen: UttarakhandHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
UttarakhandFestival :{ screen:UttarakhandFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

BiharHistory:{ screen: BiharHistory,
navigationOptions:{
headerTitle:'HISTORY',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharCity:{ screen: BiharCity,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharFestival:{ screen: BiharFestivals,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharSound:{ screen: BiharSound,
  headerStyle: {
       backgroundColor: '#302f2e',
     },
      headerTintColor: 'white',

},
Category:{ screen: BiharCategory,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
Patna:{ screen: Patna,
navigationOptions:{
headerTitle:'Patna',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
Delhi:{ screen: Delhi,
navigationOptions:{
headerTitle:'Delhi',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DelhiHistory:{ screen: DelhiHistory,
navigationOptions:{
headerTitle:'HISTORY',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DelhiCategoryForts:{ screen: DelhiCategoryForts,
navigationOptions:{
headerTitle:'FORTS',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DelhiCategoryTemples:{ screen: DelhiCategoryTemples,
navigationOptions:{
headerTitle:'TEMPLES',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

Agra:{ screen: Agra,
navigationOptions:{
headerTitle:'Agra',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

Rajasthan:{ screen: Rajasthan,
navigationOptions:{
headerTitle:'Rajasthan',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

RajasthanCategory :{ screen: RajasthanCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
RajasthanCity:{ screen: RajasthanCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
RajasthanHistory :{ screen: RajasthanHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
RajasthanFestival :{ screen: RajasthanFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
WestBangal:{ screen: WestBangal,
navigationOptions:{
headerTitle:'WestBangal',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

WestBangalCategory :{ screen: WestBangalCategory ,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
WestBangalCity:{ screen: WestBangalCity ,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
WestBangalHistory :{ screen: WestBangalHistory ,
navigationOptions:{
headerTitle:'History',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
WestBangalFestival :{ screen: WestBangalFestival ,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
ChhathHis:{ screen: ChhathHis,
navigationOptions:{
headerTitle:'ChhathPuja',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
ChhathPujaWeb:{ screen: ChhathPujaWeb,
navigationOptions:{
headerTitle:' More About Chhath Puja',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharFestKalachakaraHis:{ screen: BiharFestKalachakaraHis,
navigationOptions:{
headerTitle:'Kalachakara Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharFestSonepurHis:{ screen: BiharFestSonepurHis,
navigationOptions:{
headerTitle:'SONPUR MELA',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharFestRajgirDanceHis:{ screen: BiharFestRajgirDanceHis,
navigationOptions:{
headerTitle:' RAJGIR DANCE FESTIVAL',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharFestMakarSankarantiHis:{ screen: BiharFestMakarSankarantiHis,
navigationOptions:{
headerTitle:'MAKAR SANKRANTI',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharFestSamaChakevaHis:{ screen: BiharFestSamaChakevaHis,
navigationOptions:{
headerTitle:'SAMA CHAKEVA',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharFestBihulaHis:{ screen: BiharFestBihulaHis,
navigationOptions:{
headerTitle:'BIHULA',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharFestMadhushravanHis:{ screen: BiharFestMadhushravanHis,
navigationOptions:{
headerTitle:'MADHUSHRAVAN',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

BiharCategoryTemples:{ screen: BiharCategoryTemples,
navigationOptions:{
headerTitle:'Temples',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharCategoryTemplesBudha:{ screen: BiharCategoryTemplesBudha,
navigationOptions:{
headerTitle:'BudhaTemples',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

BiharCategoryTempleshanuman:{ screen: BiharCategoryTempleshanuman,
navigationOptions:{
headerTitle:'Hanuman Temples',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

BiharCategoryTemplesBudhaDirections:{ screen: BiharCategoryTemplesBudhaDirections,
navigationOptions:{
headerTitle:'END ROUTE',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

BiharCategoryTempleshanumanDirections:{ screen: BiharCategoryTempleshanumanDirections,
navigationOptions:{
headerTitle:'END ROUTE',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharCategoryForts:{ screen: BiharCategoryForts,
navigationOptions:{
headerTitle:'END ROUTE',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharCategoryFortsNalanda:{ screen: BiharCategoryFortsNalanda,
navigationOptions:{
headerTitle:'Nalanda',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
BiharCategoryFortsMunger:{ screen: BiharCategoryFortsMunger,
navigationOptions:{
headerTitle:'Munger',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

DelhiCategory:{ screen: DelhiCategory,
navigationOptions:{
headerTitle:'Category',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DelhiCity:{ screen: DelhiCity,
navigationOptions:{
headerTitle:'City',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DelhiFestival:{ screen: DelhiFestival,
navigationOptions:{
headerTitle:'Festival',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DelhiFortIndiaGate:{ screen: DelhiFortIndiaGate,
navigationOptions:{
headerTitle:'INDIA GATE',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},




CategoryIndiagateDirection:{ screen: CategoryIndiagateDirection,
navigationOptions:{
headerTitle:'END ROUTE',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DelhiFortJammaMasjid:{ screen: DelhiFortJammaMasjid,
navigationOptions:{
headerTitle:'Jamma Masjid',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DelhiFortOutbMinar:{ screen: DelhiFortOutbMinar,
navigationOptions:{
headerTitle:'Outb Minar',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DelhiFortOutbMinarDirection:{ screen: DelhiFortOutbMinarDirection,
navigationOptions:{
headerTitle:'END ROUTE',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DelhiFortRashtrapatiBhavan:{ screen: DelhiFortRashtrapatiBhavan,
navigationOptions:{
headerTitle:'Rashtrapati Bhavan',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

DelhiFortRashtrapatiBhavanDirection:{ screen: DelhiFortRashtrapatiBhavanDirection,
navigationOptions:{
headerTitle:'END ROUTE',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DelhiTempleAkshardhantemple:{ screen: DelhiTempleAkshardhantemple,
navigationOptions:{
headerTitle:'Akshardhan',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
DelhiTempleAkshardhantempleDirections:{ screen: DelhiTempleAkshardhantempleDirections,
navigationOptions:{
headerTitle:'END ROUTE',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},





DelhitempleChhatarpurTemple:{ screen: DelhitempleChhatarpurTemple,
navigationOptions:{
headerTitle:'Chhatarpur',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},




DelhitempleChhatarpurTempleDirections:{ screen: DelhitempleChhatarpurTempleDirections,
navigationOptions:{
headerTitle:'END ROUTE',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


DelhiTempleLotusTemple:{ screen: DelhiTempleLotusTemple,
navigationOptions:{
headerTitle:'Lotus Temple',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},


DelhiTempleLotusTempleDirections:{ screen: DelhiTempleLotusTempleDirections,
navigationOptions:{
headerTitle:'END ROUTE',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},

UtterPradesh:{ screen: UtterPradesh,
navigationOptions:{
headerTitle:'UP',
headerStyle: {
     backgroundColor: '#302f2e',
   },
    headerTintColor: 'white',
},
},
})

const styles = StyleSheet.create({
  container:{
    flex:1,

    alignItems:'center',
    justifyContent: 'center',
  },
});
