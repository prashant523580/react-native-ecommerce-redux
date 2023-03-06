import { Image, StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux-store/actions/cart.action';

export default function ProductDetails({ route, navigation }: any) {
  const { params: { product } } = route;
  const dispatch = useDispatch<any>();
  useEffect(() => {
    // console.log(product)
    
  }, [])
  return (
    <View style={styles.container}>

    <ScrollView >
      <View style={{
      backgroundColor:"white",
      paddingVertical:10,
      paddingHorizontal:10,
    }}>

      <Image source={{ uri: product.image }} style={{
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        resizeMode: "contain"
      }} />
      </View>
      <View style={styles.textContent}>

      <Text style={{
        fontSize:17,
        fontWeight:"bold"
      }}>{product.title}</Text>
      <Text style={{fontSize:16}}>Rs.{product.price}</Text>
      <Text style={styles.title}>Description</Text>
      <Text style={{paddingHorizontal:5}}> {product.description}</Text>
      </View>
     
    </ScrollView>
    <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.button,{
          backgroundColor:"orange"
        }]}>
          <Text style={styles.btnText}>Buy</Text>
          <Image style={{
                    width: 25, height: 25,
                    tintColor:"white"
                }} source={require("../images/icon/buy.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}
        onPress={() => {
          dispatch(addToCart(product))
        }}
        >
          <Text style={styles.btnText}>Add To Cart</Text>
          <Image style={{
                    width: 25, height: 25,
                    tintColor:"white"
                }} source={require("../images/icon/shopping-cart.png")}/>
        </TouchableOpacity>
      </View>
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    // justifyContent:"center",
    backgroundColor: "rgba(255,255,255,.4)",

  },
  textContent:{
    paddingHorizontal:10,
    // backgroundColor:"rgba(225,225,225,.3)",
    paddingVertical:10,
    // elevation:1
  },
  title:{
      fontSize:18,
      fontWeight:"bold"
  },
  btnContainer:{
    flexDirection:"row",
    // paddingHorizontal:10,
    // paddingVertical: 10,
  },
  button:{
    backgroundColor:"gray",
    width:"50%",
    paddingHorizontal:10,
    paddingVertical: 10,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",

  },
  btnText:{
    textAlign:"center",
    color:"white"
  }
})