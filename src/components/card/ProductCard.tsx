import React from 'react'
import { Alert, Button, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
interface PropsTypes {
    name: string
    img: any
    category: string,
    price: number,
    product?:any,
    onCartClick: () => void
    onWishlistClick: () => void
    onClick?: () => void
}
let textColor = "black";
let btnTextColor = "white";
let btnColor = "black";
export default function ProductCard(props: PropsTypes) {
  return (
    <TouchableOpacity style={style.card } onPress={props.onClick}>
        {/* <View style={style.imageContent}> */}

        <Image 
        style={style.image}
            source={{uri:props.img}}
            />
            {/* </View> */}
        <View style={style.info}>
            <Text style={[style.title, style.commonTextLeft]}>{props.name.slice(0,20) + "..."}</Text>
            <Text style={[style.category, style.commonTextLeft]}>category : {props.category}</Text>
            <Text style={[style.category, style.commonTextLeft]}>Rs.{props.price}</Text>

        </View>
        <TouchableOpacity 
        onPress={props.onCartClick}
        style={style.button}>
                <Text style={style.buttonText}>Add to Cart</Text>
                <Image style={{
                    width: 25, height: 25,
                    tintColor:"white"
                }} source={require("../../images/icon/shopping-cart.png")}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={props.onWishlistClick}
        style={style.wishlist}>
                <Image style={{
                    width: 25, height: 25,
                  
                }} 
                
                    source={require("../../images/navigation-icon/heart.png")}
                />
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    card:{
        width:200,
        height:250,
        marginVertical:15,
        marginHorizontal:5,
        // backgroundColor:"rgba(0,0,0,0.4)",
        position:"relative",
        paddingTop: 5,
        borderRadius: 10,
        overflow:"hidden",
     
        shadowOffset:{width:0, height:0},
        shadowRadius:1,
        shadowOpacity: .1,
        elevation:5,
        shadowColor:"rgba(0,0,0,0.9)",
        backgroundColor:"white"
        // alignSelf:"center",
        // margin:"0 auto",

    },
    // imageContent:{
    //     width: 150,
    //     height:150,
    //     display:'flex',
    //     justifyContent:"center",
    //     alignSelf: "center",
    //     // paddingHorizontal: 5
    // },
    image:{
        height: "50%",
        width:"100%",
    
        // aspectRatio:1,
        resizeMode:"contain"
        // width: 200,
        // height:250,

    },
    info:{
        paddingVertical: 4,
        paddingHorizontal:5,
    },
    title:{
        fontSize: 15,
        textAlign:"left",
        fontWeight:"bold",
        paddingBottom:2,
        fontVariant:["small-caps"],
        color:textColor
    },
    category:{
        fontSize: 14,
        color:"#777"
    },
    button:{
        backgroundColor:btnColor,
        paddingVertical:10,
        position:"absolute",
        bottom:0,
        width:'100%',
        flexDirection:"row",
        // display:"flex",
        justifyContent:"space-around"

    },
    buttonText:{
        // textAlign:"center",
        color:btnTextColor
    },
    commonTextLeft:{
        textAlign: "left",
        color: textColor
    },
    wishlist:{
        position:"absolute",
        top:8,
        right: 8,
        width:40,
        height:40,
        borderRadius:40,
        backgroundColor:"white",
        elevation:6,
        justifyContent:"center",
        alignItems:"center"
    }
    
})