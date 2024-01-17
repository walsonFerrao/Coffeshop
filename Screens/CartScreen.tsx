import { Image, SafeAreaView, Text, View } from "react-native"
import { Topheaderone } from "../Components/Topheaderone"
import { coffee } from "../Config"
import { Fonts } from "../commonstyles/Fonts"

const Addtocardsection=()=>{
    return (
        <View style={{width:350,height:60,flexDirection:'row',justifyContent:'space-between',alignItems:'center',alignSelf:'center',position:'absolute',bottom:20}}>
<View >
<Text   style={{color:'#AEAEAE',fontFamily:'Poppins',fontSize:14,fontWeight:'600',lineHeight:20,textAlign:'center',marginBottom:3}} >
Total Price
</Text>
<View style={{flexDirection:'row'}}>
    <Text style={[Fonts.header,{  color:"#D17842", fontWeight:"600"}]} >$</Text>
    <Text style={Fonts.header}> 10.50</Text>
</View>
</View>

<View style={{width:240,backgroundColor:'#D17842',justifyContent:'center',alignItems:'center',height:60,borderRadius:20}}>
<Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'600'}}>
Pay
</Text>
</View>

        </View>
    )
}


const Mediumroastedcomponent=()=>{
    return (
    <View style={{width:131,height:44,backgroundColor:'#141921',borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:15}}>
        <Text  style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: 10, lineHeight: 20, color: '#AEAEAE' }} >
        Medium Roasted
        </Text>
    </View>
    )
    }

    const Signs=({ sign})=>{
        return (
            <View style={{width:28.44,height:28.44,backgroundColor:"#D17842",borderRadius:7}}>
    <Text style={{fontWeight:'400',color:'white',fontSize:20,textAlign:'center'}}>
   {sign}
    </Text>
</View>
        )
    }

    const Quantitybox=({size})=>{
        return (<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:10}}>

<View style={{height:35,width:72,backgroundColor:'#0C0F14',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
<Text style={[Fonts.header,{fontSize:18}]}> {size}</Text>

</View>
<View style={{flexDirection:'row'}}>
    <Text style={[Fonts.header,{  color:"#D17842", fontWeight:"600"}]} >$</Text>
    <Text style={Fonts.header}> 10.50</Text>
</View>
<Signs  sign={"−"}/>

<View style={{height:30,width:50,borderRadius:7,alignItems:'center',backgroundColor:'black',justifyContent:'center',borderWidth:1,borderColor:'#D17842'}}>
<Text style={[Fonts.header,{textAlign:'center',fontSize:18}]}>
    1
</Text>
</View>

<Signs  sign={"+"}/>



        </View>)
    }

const Firstcard=()=>{
    return (
        <View style={{width:330,height:255,backgroundColor:'#262B33',alignSelf:'center',borderRadius:23,padding:10,marginTop:15}}>

<View style={{flexDirection:'row',justifyContent:'space-between',width:'85%'}} >

<View>
    {/* image left*/}
    <Image source={coffee} style={{height:100,width:100,borderRadius:20}} />
</View>
<View>
{/* right */}
<Text style={[Fonts.header,{fontWeight:'400',fontSize:16}]} >
            Robusta Beans
        </Text >
        <Text style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 12, lineHeight: 20, color: '#AEAEAE' }} >
            With Steamed Milk
        </Text>
<Mediumroastedcomponent/>
</View>

</View>

{/* bottom section */}

<Quantitybox size={"S"}/>
<Quantitybox size={"M"}/>
<Quantitybox size={"L"}/>
        </View>
    )

}


const CartScreen=()=>{

return (
    <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
<Topheaderone cart={true}  />
<Firstcard />
<Firstcard />
<Addtocardsection />
    </SafeAreaView>
)


}

export default CartScreen