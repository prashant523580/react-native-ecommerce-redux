import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
interface PropsTypes{
    title: string,
    onPress?: () => void
    fgColor?:string
    bgColor?:string
    width?:any,
    my?:number,
    borderWidth?:any,
    borderColor?:any,
    style?:any,
    icon?:any,
    iconColor?:any
}
export default function CustomButton(props: PropsTypes) {
  return (
    <TouchableOpacity style={[{
        backgroundColor:props.bgColor,
        borderRadius:8,
        // elevation: 1,
        paddingHorizontal: 10,
        paddingVertical:10,
        width:props.width,
        marginVertical:props.my,
        borderColor:props.borderColor,
        borderWidth:props.borderWidth
    },props.style]} onPress={props.onPress}>
      {
          props.icon ? <Image source={props.icon} style={{
            width:25, height:25,tintColor:props.iconColor
          }}/>

          :
        <Text style={{
          color:props.fgColor,
          textAlign:"center",
          width:"100%"
        }}>{props.title}</Text>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})