import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from 'react-redux';
import { isAuthenticate } from '../redux-store/actions/user.action';
import { getProducts } from '../redux-store/actions/product.action';
export default function Splash({navigation}:any) {
    const dispatch = useDispatch<any>();
  React.useEffect(() => {
    
    setTimeout(async () => {
        dispatch(isAuthenticate())
        dispatch(getProducts())
        let user = await AsyncStorage.getItem("user");
          (user !== null) ? user = JSON.parse(user) : user = null
        if(!user){

          navigation.navigate("Login")
        }else{
          navigation.navigate("Home",{user})
        }
      },3000)
  },[])
  return (
    <View style={styles.container}>
        <Image source={require("../images/logo.png")} style={styles.img}/>
        <Text style={{
            fontSize:30,
            fontWeight:"bold",
        }}>Tripods Nepal</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
  },
  img:{
    width : 150,
    height: 150,
    borderRadius:100
  }
})