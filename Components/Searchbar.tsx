import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import { searchicon } from "../Config"

const Searchbar=():JSX.Element=>{

    return (

        <View >
            <Text numberOfLines={2} style={mystyle.boldtext}>
            Find the best
coffee for you
            </Text>
      <View style={mystyle.container}>
<Image style={{height:20,width:20}} source={searchicon} />
<TextInput style={[{flex:1},mystyle.text]} placeholder="Find Your Coffee..." placeholderTextColor={'#52555A'} />
{/* <Text  style={mystyle.text}>
Find Your Coffee...
</Text> */}
      </View>
      </View>
    )
}

const mystyle=StyleSheet.create({

    container:{
width:330,
backgroundColor:"#141921",
height:45,
borderRadius:15,
flexDirection:'row',
alignItems:'center',
paddingLeft:20,
marginLeft:20

    },
    text:{
        fontFamily:'Poppins',
        color:'#52555A',
        marginLeft:20
    },
    boldtext:{
        color:'#FFFFFF',
        marginLeft:20,
        fontFamily:'Poppins',
        fontSize:28,
        fontWeight:'600',
        width:195,
        marginBottom:20
    }

})

export {Searchbar}