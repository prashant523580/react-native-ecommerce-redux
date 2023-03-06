import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>Tripods Nepal Shop</Text>
      <TouchableOpacity> 
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        paddingHorizontal: 10,
        paddingVertical: 10,
        width:"100%",
        justifyContent:"space-between",
    }
})