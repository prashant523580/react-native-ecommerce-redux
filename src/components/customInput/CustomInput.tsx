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
    children?:any
}
export default function CustomInput({children,placeholder,onChangeText,icon,value,keyBoardType,secureTextEntry} : PropsTypes) {
  return (
    <View style={styles.container}>
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
        borderColor: "black",
        position:"relative",
        // width:"100%",
        marginVertical:5,
        paddingHorizontal:5,
        borderRadius: 5,
    },
    icon:{
        width: 20,
        height: 20,
        marginHorizontal: 5

    },
    inputControl:{
    }
})