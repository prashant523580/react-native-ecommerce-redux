import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ProductTypes } from '../../types/product'

interface PropsTypes {
  item: ProductTypes,
  onRemove?: () => void,
  cartIncrement?: () => void,
  isCartCard: boolean
}
export default function Card({ item, onRemove, cartIncrement, isCartCard }: PropsTypes) {
  return (
    <View style={{
      marginVertical: 5,
      flexDirection: "row",
      backgroundColor: "white",
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderRadius: 5,
      elevation: 3
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
        <View style={{
          // position: "absolute",
          // bottom: 0,
          // left: 0
        }}>
          {
            isCartCard ?
          <View style={{

            flexDirection: "row",
            justifyContent: "flex-end"
          }}>

              <TouchableOpacity onPress={onRemove}>
              <Text style={[styles.commonText]}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.commonText]}>{item.qty ? item.qty : "1"}</Text>
            <TouchableOpacity onPress={cartIncrement}>
              <Text style={[styles.commonText]}>+</Text>
            </TouchableOpacity>

          </View>
          :
          <TouchableOpacity onPress={onRemove}>
            <Text>Remove</Text>
          </TouchableOpacity>
}
        </View>
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