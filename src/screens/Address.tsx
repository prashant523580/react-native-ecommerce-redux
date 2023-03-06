import { StyleSheet, Text, View, Alert, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import CommonHeader from '../components/CommonHeader'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { ScreenNames } from '../AppNavigation'
import { useSelector } from 'react-redux'
import { RootState } from '../redux-store/store'

export default function Address({ navigate }: any) {
  const navigation = useNavigation<ScreenNames>();
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
    <View>
      <CommonHeader title='Address'
        image={require("../images/icon/plus.png")}
        onPress={handleAddAddress}
      />
      <FlatList
        data={address}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.addressContent}>
              <View >

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
              <TouchableOpacity>
                <Text> Delete Address</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  addressContainer: {

  },
  addressContent: {
    marginVertical: 5,
    backgroundColor: "gray",
  },
  address: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"center",
  },
  addressText: {
      color: "white"
  },
  icon: {
    width: 30,
    height: 30,
    tintColor:"white"
  }
})