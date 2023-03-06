import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
interface PropsTypes {
    title: string,
    onPress?: () => void
}
export default function ProfileHeader({title,onPress} : PropsTypes) {
  return (
    <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{
            width: 25,
            height:25
        }}
        source={require("../images/icon/settings.png")}
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