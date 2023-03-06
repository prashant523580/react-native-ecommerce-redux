import { StyleSheet, Text, View ,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import CommonHeader from '../components/CommonHeader'
import { useNavigation } from '@react-navigation/native'
import { ScreenNames } from '../AppNavigation';
import CustomInput from '../components/customInput/CustomInput';
import { UserAddressTypes } from '../types/user';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux-store/actions/user.action';

export default function AddAddress() {
    const navigation = useNavigation<any>();
    const [address,setAddress] = React.useState<UserAddressTypes>({
        name :"",
        city:"",
        street:"",
        phone:"",
        email:""
    });
    const dispatch = useDispatch<any>();
    const handleAddressForm = () => {
        if(address.city && address.email && address.street && address.phone && address.name){
            console.log(address)

            dispatch(addAddress(address))
            navigation.goBack();
        }else{
            Alert.alert("please fill all input fields")
        }
    }
  return (
    <View>
        <CommonHeader
            style={{
                backgroundColor:"none"
            }}
            image={require("../images/icon/back.png")}
            btnStyle={{
                elevation: 1,
                borderRadius: 50,
                width:40,
                height:40,
                justifyContent:"center",
                alignItems:"center"
            }}
            onPress={() => {
                navigation.goBack()
            }}
        />
      <View style={styles.formContainer}>
        <CustomInput
            icon={require("../images/user.png")}
            placeholder={"Full Name"}
            keyBoardType={'ascii-capable'}
            value={address.name}
            onChangeText={(text : string)=> {
                setAddress((pre :any) => {
                    return{
                        ...pre,
                        name: text
                    }
                })
            }}
        />
        <CustomInput
            icon={require("../images/icon/city.png")}
            placeholder={"City"}
            keyBoardType={'ascii-capable'}
            value={address.city}
            onChangeText={(text : string)=> {
                setAddress((pre :any) => {
                    return{
                        ...pre,
                        city: text
                    }
                })
            }}
        />
        <CustomInput
            icon={require("../images/icon/pin.png")}
            placeholder={"Street"}
            keyBoardType={'ascii-capable'}
            value={address.street}
            onChangeText={(text : string)=> {
                setAddress((pre :any) => {
                    return{
                        ...pre,
                        street: text
                    }
                })
            }}
        />
        <CustomInput
            icon={require("../images/email.png")}
            placeholder={"Email"}
            keyBoardType={'email-address'}
            value={address.email}
            onChangeText={(text : string)=> {
                setAddress((pre :any) => {
                    return{
                        ...pre,
                        email: text
                    }
                })
            }}
        />
        <CustomInput
            icon={require("../images/mobile.png")}
            placeholder={"Phone"}
            keyBoardType={'phone-pad'}
            value={address.phone}
            onChangeText={(text : string)=> {
                setAddress((pre :any) => {
                    return{
                        ...pre,
                        phone: text
                    }
                })
            }}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddressForm}>
            <Text style={{color:"white", textTransform:"capitalize"}}>Save address</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    formContainer:{
        paddingHorizontal:25
    },
    button:{
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"black",
        paddingVertical: 14,
        width: "70%",
        alignSelf:"center",
        borderRadius: 10,
        elevation: 1,
        marginVertical: 25,
    }
})