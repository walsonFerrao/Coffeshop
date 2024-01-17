import { StyleSheet, View ,Text, Image} from "react-native"
import { coffee } from "../Config"
const Cardtwo=():JSX.Element=>{

return (<View>

<View style={mystyle.containerone}>

<View  style={mystyle.containertwo} >

<View style={mystyle.containerImage} >
<Image  style={{height:'100%',width:'100%',borderRadius:23}} source={coffee}/>
</View>
<View style={{marginTop:10}}>
    <Text style={{fontFamily:'Poppins',fontSize:13,color:'#FFFFFF',lineHeight:20}}>
    Robusta Beans
    </Text>
    <Text style={{fontFamily:'Poppins',fontSize:9,color:'#FFFFFF',lineHeight:20}}>
    Medium Roasted 
    </Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
    <View style={{flexDirection:'row'}}>
<Text style={{color:'#D17842',fontWeight:'600',fontSize:15,fontFamily:'Poppins'}}>
$
</Text>
<Text  style={{color:'#FFFFFF',fontWeight:'600',fontSize:15,fontFamily:'Poppins',marginLeft:5}}>
    4.20
</Text>
    </View>
    <View style={{height:28.44,width:28.44,backgroundColor:'white',paddingTop:4,borderRadius:7}}>
<Text style={{textAlign:'center'}} >
    +
</Text>
    </View>
</View>
</View>
</View>

</View>)


}

const mystyle=StyleSheet.create({
    containerone:{
        height:245,
        width:149,
        backgroundColor:'#262B33',
        padding:11.5,
        borderRadius:23,
        marginLeft:20
    },
    containertwo:{
        // backgroundColor:'green',
        flex:1,
        borderRadius:23
    },
    containerImage:{
        // backgroundColor:'blue',
        width:'100%',
        borderRadius:23,
        height:126,
    },


})

export {Cardtwo}