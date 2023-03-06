import { StyleSheet, Text, TextInput, View,Image } from 'react-native'
import React from 'react'
import { KeyboardTypeOptions } from 'react-native/Libraries/Components/TextInput/TextInput'
enum keyBoardType{
    "ascii-capable","decimal-pad","default","email-address","name-phone-pad","number-pad","numbers-and-punctuation",
    "numeric","phone-pad","twitter","url","visible-password","web-search"
}
interface PropsTypes{
    placeholder:string,
    onChangeText: any,
    value: any,
    icon: any,
    keyBoardType: KeyboardTypeOptions,
    secureTextEntry?: boolean,
    children?:any,
    errorStyle? : any
}
export default function CustomInput({children,placeholder,onChangeText,icon,value,keyBoardType,secureTextEntry,errorStyle} : PropsTypes) {
  return (
    <View style={[styles.container, errorStyle]}>
        <Image source={icon} style={styles.icon}/>
      <TextInput style={styles.inputControl} secureTextEntry={secureTextEntry} keyboardType={keyBoardType} placeholder={placeholder}  value={value} onChangeText={onChangeText} />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        borderWidth: 2,
        justifyContent:"flex-start",
        // borderColor: "black",
        position:"relative",
        width:"100%",
        marginVertical:5,
        paddingHorizontal:5,
        borderRadius: 5,
        overflow: "hidden",
    },
    icon:{
        width: 25,
        height: 25,
        marginHorizontal: 5

    },
    inputControl:{
      width:"100%"
    }
})