import { useState } from 'react'
import {ScrollView, View,Text, StyleSheet, TouchableOpacity} from 'react-native'

const Topbar=()=>{

    const [selected,setselected]=useState("All")


    const Viewset= (props)=> <TouchableOpacity activeOpacity={1} onPress={()=>{setselected(props.heading)}} style={{alignItems:'center',marginLeft:25}} >
    <Text style={props. heading===selected? mystyle.selectedFonts:mystyle.unselectedfonts }>
    {props.heading}
    </Text>
    <View style={[mystyle.dot,{backgroundColor:props. heading===selected?"#D17842":"black"}]}>
 
    </View>
    </TouchableOpacity>



    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={mystyle.container}>
               <Viewset  heading={"All"} />
               <Viewset  heading={"Cappuccino"} />
               <Viewset  heading={"Espresso"} />
                 <Viewset  heading={"Americano"} />
                 <Viewset  heading={"Macchiato"} />
</View>
            </ScrollView>
        </View>
    )
}

const mystyle=StyleSheet.create({
    selectedFonts:{
color:'#D17842',
fontFamily:'Poppins',
fontWeight:'600',
lineHeight:20,
    },
    unselectedfonts:{
color:'#52555A',
fontFamily:'Poppins',
fontWeight:'600',
lineHeight:20,
    },
    dot:{
        height:11,
        width:11,
        borderRadius:10,
        backgroundColor:'#D17842',
        marginTop:5,
    
    },
container:
{
    flexDirection:'row',
}

})

export {Topbar}