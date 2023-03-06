import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
interface PropsTypes{
    title: string,
    onPress: () => void
    fgColor:string
    bgColor:string
    width?:any,
    my?:number
}
export default function CustomButton(props: PropsTypes) {
  return (
    <TouchableOpacity style={{
        backgroundColor:props.bgColor,
        borderRadius:8,
        elevation: 2,
        paddingHorizontal: 10,
        paddingVertical:10,
        width:props.width,
        marginVertical:props.my
    }} onPress={props.onPress}>
        <Text style={{
            color:props.fgColor,
            textAlign:"center",
            width:"100%"
        }}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})