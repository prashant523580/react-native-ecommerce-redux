import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Banner({img} : any) {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        
    },
    image:{
        width:"100%",
        height:150,
        // aspectRatio:1,
        resizeMode:"contain"
    }
})