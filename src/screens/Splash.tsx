import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Splash({navigation}:any) {
  React.useEffect(() => {
      setTimeout(() => {
          navigation.navigate("Login")
      },2000)
  },[])
  return (
    <View style={styles.container}>
        <Image source={require("../images/logo.png")} style={styles.img}/>
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
    borderRadius:50
  }
})