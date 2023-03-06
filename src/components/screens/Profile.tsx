import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import { UserTypes } from '../../types/user';
import { ScreenNames } from '../../AppNavigation';
import ProfileHeader from '../ProfileHeader';
import CommonHeader from '../CommonHeader';
export default function ProfileComponent({navigate}: any) {
  const [auth,setAuth] = React.useState<UserTypes>();
  const navigation = useNavigation<ScreenNames>();
  React.useEffect(() => {
      getUser()
  },[])
  const logout = async ()=>{
    // await AsyncStorage.removeItem("user");
      // navigate("Login");
  }
  const getUser = async() => {
    let user : any = await AsyncStorage.getItem("user");
  (user !== null) ? user = JSON.parse(user) : user = null
  setAuth(user)
  }
  return (
    <View style={styles.container}>
      <CommonHeader title='Profile'
        image={require("../../images/icon/settings.png")}
      />
      <Image style={styles.profileImage} source={require("../../images/icon/user.png")}/>

        <Text>{auth?.name}</Text>
        <Text>{auth?.email}</Text>
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("Address")
      }}>
        <Text>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text>Offers</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },

  profileImage:{
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  btnContainer:{
      width:"100%",
      paddingHorizontal: 15,
      paddingVertical: 20,
  },
  button:{
      width:"100%",
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      paddingVertical: 10,

  }
})