import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Divider = (props:any) => {
  return (
    <View style={[styles.divider,props.style]}>
      
    </View>
  )
}

export default Divider

const styles = StyleSheet.create({
    divider:{
        height: 3,
    width: 120,
    backgroundColor:"orange",
    borderRadius:4,
    }
})