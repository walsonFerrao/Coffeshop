import { Image, StyleSheet, Text, View } from 'react-native'
import { largecoffe } from '../Config'
import { Fonts } from '../commonstyles/Fonts'

const Imagebox = () => {
    return (<View style={{ width: '100%', height: 521 }}>
        <Image source={largecoffe} style={{ height: '100%', width: '100%', backgroundColor: 'red' }} />

        < Imagebottombox />
    </View>)
}
const Imagebottombox = () => {
    return (<View style={{height:148.2,padding:20,backgroundColor:'rgba(20, 25, 33, 0.6)',position:'absolute',width:'100%',bottom:0,}} >
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
        <View style={{flexDirection:'row',flexWrap:'wrap',width:'34%',justifyContent:'space-between'}}>
        <Smallsection image={require('../Assets/others/nut.png')} name={'Coffee'}  />
        <Smallsection image={require('../Assets/others/nut.png')} name={'Coffee'}  />
        <Mediumroastedcomponent />
        </View>
        </View>
    </View>
   
    
    )
}


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

    return (<View style={{height:135,width:351,marginTop:10,marginLeft:10}}>
        <Text style={{color:'#AEAEAE',fontFamily:'Poppins',fontSize:14,fontWeight:'600',lineHeight:20,marginBottom:10}}>
        Description
        </Text>
        <Text style={{color:'#FFFFFF',fontFamily:'Poppins',fontSize:12,fontWeight:'400',lineHeight:20}}>
        Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! 
        </Text>

    </View>)
}

const Size_secion=({arr})=>{
    return (
    <View>
         <Text  style={{color:'#AEAEAE',fontFamily:'Poppins',fontSize:14,fontWeight:'600',lineHeight:20,marginBottom:10,marginLeft:10,marginTop:10}}>
        Size
        </Text>
    <View style={{flexDirection:'row',width:351,justifyContent:'space-between',marginLeft:10}}>
       
{
    arr.map((e)=>
            <View key={e} style={{height:40,width:100,backgroundColor:'#141921',borderRadius:10}}>
              <Text  style={{color:'#AEAEAE',fontFamily:'Poppins',fontSize:14,fontWeight:'600',lineHeight:20,textAlign:'center',marginTop:10}} >
                {e}
              </Text>
            </View>
    )
}

    </View>
    </View>
    )
}

const Addtocardsection=()=>{
    return (
        <View style={{width:350,height:60,flexDirection:'row',justifyContent:'space-between',alignItems:'center',alignSelf:'center',marginTop:16}}>
<View >
<Text   style={{color:'#AEAEAE',fontFamily:'Poppins',fontSize:14,fontWeight:'600',lineHeight:20,textAlign:'center',marginBottom:3}} >
Price
</Text>
<View style={{flexDirection:'row'}}>
    <Text style={[Fonts.header,{  color:"#D17842", fontWeight:"600"}]} >$</Text>
    <Text style={Fonts.header}> 10.50</Text>
</View>
</View>

<View style={{width:240,backgroundColor:'#D17842',justifyContent:'center',alignItems:'center',height:60,borderRadius:20}}>
<Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'600'}}>
Add to Cart  
</Text>
</View>

        </View>
    )
}

const Screentwo = () => {

    return (

        <View>
            <Imagebox />
            <Description />
            <Size_secion arr={["1gm",'2gm','3gm']} />
            <Addtocardsection />
        </View>
    )

}

const Imagebottomboxstyle = StyleSheet.create({

})

export { Screentwo ,Imagebottombox}