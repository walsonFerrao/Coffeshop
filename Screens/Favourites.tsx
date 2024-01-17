  
import { View,Image,Text, SafeAreaView } from "react-native"
import { largecoffe } from "../Config"
import { Fonts } from "../commonstyles/Fonts"

const Ratingsection =()=>{
    return (
        <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'36%',marginTop:20}}> 
<Image source={require('../Assets/others/star.png')}  style={{height:22.5,width:22.5}}/>
<Text style={[Fonts.header,{fontSize:16,marginLeft:10}]}>
4.5
</Text>
<Text style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: 10, lineHeight: 20, color: '#AEAEAE' ,marginLeft:10}}>
(6,879)
</Text>

        </View>
    )
}


const Smallsection = ({image, name}) => {
    return (
        <View style={{height:55.71,width:55.71,borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#141921'}}>
<View>
<View  style={{height:26.74,width:26.74}}>
<Image source={image}  style={{height:'100%',width:'100%'}} />
</View>
<View>
<Text style={{color:'#AEAEAE',fontFamily:'Poppins',fontSize:10,fontWeight:'500',lineHeight:20}}>
{name}
</Text>
</View>
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

const Description=()=>{

    return (<View style={{height:135,width:301,marginTop:10,marginLeft:10}}>
        <Text style={{color:'#AEAEAE',fontFamily:'Poppins',fontSize:14,fontWeight:'600',lineHeight:20,marginBottom:10}}>
        Description
        </Text>
        <Text style={{color:'#FFFFFF',fontFamily:'Poppins',fontSize:12,fontWeight:'400',lineHeight:20}}>
        Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! 
        </Text>

    </View>)
}


const Imagebox = () => {
    return (<View style={{ width: 350, height: 457}}>
        <Image source={largecoffe} style={{ height: '100%', width: '100%', backgroundColor: 'red',borderTopLeftRadius:20,borderTopRightRadius:20 }} />

        < Imagebottombox />
    </View>)
}
const Imagebottombox = () => {
    return (<View style={{height:148.2,padding:20,backgroundColor:'rgba(20, 25, 33, 0.6)',position:'absolute',width:'100%',bottom:0,borderTopLeftRadius:20,borderTopRightRadius:20}} >
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}> 
        <View>
        <Text style={Fonts.header} >
            Robusta Beans
        </Text >
        <Text style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 12, lineHeight: 20, color: '#AEAEAE' }} >
            With Steamed Milk
        </Text>
 <Ratingsection />
 </View>
        <View style={{flexDirection:'row',flexWrap:'wrap',width:'50%',justifyContent:'space-between'}}>
        <Smallsection image={require('../Assets/others/nut.png')} name={'Coffee'}  />
        <Smallsection image={require('../Assets/others/nut.png')} name={'Coffee'}  />
        <Mediumroastedcomponent />
        </View>
        </View>
    </View>
   
    
    )
}

const Favourites=()=>{



    return (
        <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
    <View  style={{ backgroundColor:'black',alignSelf:'center',alignItems:'center',borderRadius:15}}>

<Imagebox />
<View style={{width:350,backgroundColor:'#262B33',borderBottomLeftRadius:20,borderBottomRightRadius:20,paddingBottom:10}}>
<Description />
</View>
    </View>
    </SafeAreaView>
    )



}

export {Favourites}


