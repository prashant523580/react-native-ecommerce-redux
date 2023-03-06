import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
interface PropsTypes {
    title?: string,
    onPress?: () => void,
    image? : any,
    btnStyle?:any,
    style?:any
}
export default function CommonHeader({title,onPress,image,btnStyle,style} : PropsTypes) {
  return (
    <View style={[styles.header,style]}>
    { title && <Text style={styles.headerTitle}>{title}</Text> }
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Image
        style={{
            width: 25,
            height:25
        }}
        source={image}
      />
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:15,
        backgroundColor:"white",
        width: "100%"
      },
      headerTitle:{
        fontSize:17,
        fontWeight:"bold"
      },
})