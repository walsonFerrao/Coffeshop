import { Image, StyleSheet, Text,View ,ScrollView} from "react-native"
import { coffee } from "../Config"


const Card=():JSX.Element=>{
    return (
        <ScrollView horizontal={true}>
        <View style={{flexDirection:'row'}}>
           {[1,2,3,4,5,6].map((e)=><View style={{width:149,backgroundColor:"#252A32",borderRadius:25,height:245.68,padding:13,marginLeft:20}}>
    <View >
    <View style={{position:'absolute',right:0,zIndex:10,flexDirection:'row',backgroundColor: 'rgba(0, 0, 0, 0.6)',width:60,borderTopRightRadius:25,height:20,justifyContent:'center',borderBottomLeftRadius:25}}>
        <Text style={{fontWeight:'900',color:'white'}}>*</Text>
        <Text style={{fontWeight:'900',color:'white'}}>4.5</Text>
        </View>
<Image source={coffee} style={{width:'100%',height:126,borderRadius:17}} />
</View>
<View  style={{marginTop:10}} >
<Text style={mystyle.whitefont}>Cappuccino</Text>
<Text  style={[mystyle.whitefont,{fontSize:10}]}>With Steamed Milk</Text>
</View>
<View style={{flexDirection:'row',width:'100%',justifyContent:"space-between",alignItems:'center'}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={[mystyle.orangefont,{fontWeight:"600",marginRight:5}]}>$</Text>
            <Text  style={[mystyle.whitefont,{fontWeight:"600"}]}>4.20</Text>
    </View>
    <View style={mystyle. boxstyle}>
        <Text  style={[mystyle.whitefont,{ width:28.44,
   height:28.44,textAlign:'center',marginTop:5,fontWeight:"600"}]}>
            +
        </Text>
    </View>
</View>
</View>)}
        </View>
        </ScrollView>
    )

}

const mystyle=StyleSheet.create({
whitefont:{
    color:"#FFFFFF",
    lineHeight:20
},
orangefont:{
    color:"#D17842",
    fontWeight:"600"
},
boxstyle:{
    backgroundColor:"#D17842",
    borderRadius:7,
    
}

})

export default Card