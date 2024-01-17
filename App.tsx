/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { DiceImage } from './Components/DiceImage';
import { trigger } from "react-native-haptic-feedback";
import MyStack from './Components/NavigationScreen';
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
  impactLight:true,
  impactHeavy:true
};
import 'react-native-gesture-handler';
import Card from './Components/Card';
import { Cardtwo } from './Components/Cardtwo';
import { Topbar } from './Components/Topbar';
import { SearchBar } from 'react-native-screens';
import { Searchbar } from './Components/Searchbar';
import { Topheaderone } from './Components/Topheaderone';
import { Screenone } from './Screens/Screenone';
import { Screentwo } from './Screens/Screentwo';
import { Favourites } from './Screens/Favourites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { coffee } from './Config';
import CartScreen from './Screens/CartScreen';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Screenicon(route,color,size){
let   image=require('./Assets/Bottombar/Home.png')

  if(route.name=="Home")
  {
    image=require('./Assets/Bottombar/Home.png')
  }
  if(route.name=="Cart")
  {
    image=require('./Assets/Bottombar/cart.png')
  }
  if(route.name=="Favourites")
  {
    image=require('./Assets/Bottombar/Heart.png')
  }
  if(route.name=="Notification")
  {
    image=require('./Assets/Bottombar/bell.png')
  }
return <Image key={Math.random()} style={{height:20,width:20,tintColor:color,objectFit:'contain'}} source={image} />

}


const Tab = createBottomTabNavigator();
const Navigation=()=>{

return(
  <NavigationContainer>
<Tab.Navigator  backBehavior="history"  screenOptions={({route})=> ( {headerShown:false,tabBarLabel:()=>null ,tabBarActiveTintColor:'#D17842',tabBarInactiveTintColor:'#4E5053',tabBarStyle: { backgroundColor: 'black', height:60,borderTopWidth:0,paddingTop:20},tabBarIcon:({color,size})=>Screenicon(route,color,size)   })}>
<Tab.Screen   name="Home" component={Screenone} />
<Tab.Screen   name="Cart" component={CartScreen} />
<Tab.Screen   name="Favourites" component={Favourites} />

<Tab.Screen   name="Notification" component={()=><View><Text>Notification</Text></View>} />

</Tab.Navigator>
</NavigationContainer>
)

}

function App(): JSX.Element {
  return(
    

  //   <View style={{backgroundColor:'black',height:'100%'}}>
    
  //   <Screentwo />
  // </View>
  // <Favourites />
  <Navigation />
  )

}
 {/* <Screenone /> */}


export default App;
