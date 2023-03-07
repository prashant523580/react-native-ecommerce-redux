import { StyleSheet, Text, View,ScrollView, Alert, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import CommonHeader from '../components/CommonHeader'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { ScreenNames } from '../AppNavigation'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux-store/store'
import { removeAddress } from '../redux-store/actions/user.action'
import CustomButton from '../components/common/CustomButton'

export default function Address({ navigate }: any) {
  const navigation = useNavigation<ScreenNames>();
  const dispatch = useDispatch<any>();
  const { address } = useSelector((state: RootState) => state.user);
  const isFocused = useIsFocused();
  React.useEffect(() => {

  }, [isFocused])
  function handleAddAddress() {
    // Alert.alert("clicked")
    navigation.navigate("AddAddress")
  }

  React.useEffect(() => {
    console.log(address)
  }, [address])
  return (
    <View style={styles.addressContainer}>
      <CommonHeader title='Address'
        image={require("../images/icon/plus.png")}
        onPress={handleAddAddress}
      />
      <FlatList
      style={{
        // paddingBottom:20,
        // paddingVertical:20
        paddingHorizontal:10
      }}
        data={address}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.addressContent}>
              <View style={{
                width:"60%",
                // paddingHorizontal:10
              }} >

                <View style={styles.address}>
                  <Image  source={require("../images/user.png")} style={styles.icon} />
                  <Text style={styles.addressText}>  {item.name}</Text>
                </View>
                <View style={styles.address}>
                  <Image source={require("../images/email.png")} style={styles.icon} />
                  <Text style={styles.addressText}>  {item.email}</Text>
                </View>
                <View style={styles.address}>
                  <Image source={require("../images/mobile.png")} style={styles.icon} />
                  <Text style={styles.addressText}>  {item.phone}</Text>
                </View>
                <View style={styles.address}>
                  <Image source={require("../images/icon/city.png")} style={styles.icon} />
                  <Text style={styles.addressText}>  {item.city}</Text>
                </View>
                <View style={styles.address}>
                  <Image source={require("../images/icon/pin.png")} style={styles.icon} />
                  <Text style={styles.addressText}>  {item.street}</Text> 
                </View>
              </View>
              <CustomButton style={{
                  borderColor:"black",
                  borderWidth: 1
              }} onPress={() => dispatch(removeAddress(index))} 
                  icon={require("../images/icon/bin.png")}
                  fgColor={"white"}
                  title={"Remove Address"}/>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  addressContainer: {
      // paddingBottom:20,
      // paddingHorizontal:20,
      backgroundColor:"rgba(0,0,0,0.2)",
      flex:1
  },
  addressContent: {
    marginVertical: 5,
    backgroundColor: "white",
    paddingHorizontal: 10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingVertical:3,
    // borderColor: "black",
    // borderWidth: 1,
    borderRadius:10,
    elevation:1
  },
  address: {
    marginVertical: 1,
    flexDirection: "row",
    alignItems: "center",
    // width:"100%"
    justifyContent:"flex-start",
  },
  addressText: {
      // color: "white",
      textAlign:"left",
      marginLeft:2
  },
  icon: {
    width: 20,
    height: 20,
    tintColor:"green"
  }
})