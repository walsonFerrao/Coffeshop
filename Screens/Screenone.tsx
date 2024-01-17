import { View,ScrollView } from "react-native"
import Card from "../Components/Card"
import { Cardtwo } from "../Components/Cardtwo"
import { Searchbar } from "../Components/Searchbar"
import { Topbar } from "../Components/Topbar"
import { Topheaderone } from "../Components/Topheaderone"
import { SafeAreaView } from "react-native-safe-area-context"


const Screenone=()=>{

    return (

        <SafeAreaView style={{backgroundColor:'black'}}>
              <Topheaderone />
      <View style={{marginTop:15}} />
       <Searchbar />
       <View style={{marginTop:15}} />
       <Topbar />
       <ScrollView >
       <View style={{marginTop:15}} />
      <Card />
      <View style={{marginTop:15}} />
      <Cardtwo />
      </ScrollView>
        </SafeAreaView>
    )



}
export {Screenone}