import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ProductTypes } from '../../types/product'

interface PropsTypes {
  item: ProductTypes,
}
export default function OrderCard({ item}: PropsTypes) {
  return (
    <View style={{
      marginVertical: 5,
      flexDirection: "row",
      backgroundColor: "white",
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderRadius: 5,
      elevation: 1
    }}>
      <Image style={{ width: 100, height: 100, resizeMode: "contain" }} source={{ uri: item.image }} />
      <View style={{
        flex: 1,
        paddingHorizontal: 10
      }}>
        <Text style={{
         fontWeight:"bold"
  
        }}>{item.title}</Text>
        <Text>{item.category}</Text>
        <Text>Rs {item.price}</Text>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  commonText: {
    fontSize: 27,
    marginHorizontal: 10
  }
})