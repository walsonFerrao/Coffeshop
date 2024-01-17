import {Image, Text, View} from 'react-native'
const Topheaderone=({cart})=>{

    const Smallbox=()=>{
        return(
            <View style={{width:4.96,height:4.96,borderRadius:1,backgroundColor:"#FFFFFF",marginTop:2,marginLeft:1}}>

            </View>
        )
    }

const Box=()=>{
    return ( <View style={{width:29,height:29,borderRadius:10,backgroundColor:"#21262E",justifyContent:'center',borderWidth:1,borderColor:'#FFFFFF'}}>
        <View style={{flexWrap:'wrap',flexDirection:'row',width:14,height:14,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
<Smallbox />
<Smallbox />
<Smallbox />
<Smallbox />
</View>

    </View>)
}


return (
    <View style={{justifyContent:'space-between',width:'100%',flexDirection:'row',paddingHorizontal:20,alignItems:'center'}}>
<Box />
{
cart&&<Text style={{color:'white',fontFamily:'Poppins',fontWeight:'600',fontSize:20}}>
    Cart
</Text>

}
<View style={{width:30,height:30,backgroundColor:"#21262E"}}>
    <Image style={{height:'100%',width:'100%',borderRadius:10}}  source={{uri:'https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
</View>
    </View>
)


}
export {Topheaderone}