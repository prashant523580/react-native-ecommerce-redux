import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CustomInput from '../components/customInput/CustomInput';
// import CheckBox from "expo-checkbox";
// import { Octicons } from '@expo/vector-icons';

interface UserTypes {
    email: string,
    password: string,
    name: string,
    phone: string
}
const RegisterScreen = ({ navigation }: any) => {
    const [agreed, setAgreed] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState<UserTypes>({
        name: "",
        email: "",
        password: "",
        phone: ""
    })
    const [loading,setLoading] = React.useState(false);
    const [error, setError] = React.useState({
        field: "",
        message: ""
    });
    const validate = (field: UserTypes) => {
        let errorObj: { field: string, message: string } = {
            field: "",
            message: ""
        }
        if (field.name == "") {
            errorObj.field = "name"
            errorObj.message= "Input name field."
        }else if( field.email == ""){
            errorObj.field = "email"
            errorObj.message = "Input email field."
        }else if(field.phone == ""){
            errorObj.field = "phone"
            errorObj.message = "Input phone field."
        } else if (field.password == "") {
            errorObj.field = "password"
            errorObj.message = "Input password field"
        }
        return errorObj
    }
    const loginUser = async () => {
        console.log(validate(userInfo))
        setError(validate(userInfo))
        // Alert.alert(`Logged in as ${userInfo.email}`)
        if(userInfo.email && userInfo.name && userInfo.password && userInfo.phone){
            await AsyncStorage.setItem('user',JSON.stringify(userInfo))
            setLoading(true);
            setTimeout(() =>{
            // setLoading(true);

            navigation.navigate("Login")
        },2000)

        }
        
    }
    React.useEffect(() => {
        if(!error.field){
            
            
            // navigation.navigate("Home", { user: userInfo })
        }else{
            
        }
    },[error])
    React.useEffect(() => {
        // if(loading === true){
            
        //     setTimeout(() => {
        //         navigation.navigate("Home", { user: userInfo })
        //         setLoading(false)
        //     },3000)
        // }
    },[loading])
    return (
        <ScrollView >

        <View style={style.container}>
            <Image style={style.logo} source={require("../images/logo.png")} />
            <Text style={style.title}>Tripods Nepal</Text>
            <Text style={[style.title, {fontSize: 16}]}>Register</Text>
            <Text style={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

            <View style={style.form}>
                <CustomInput
                    placeholder={ error.field === "name" ? error.message : 'Enter your name'}
                    onChangeText={(text: any) => setUserInfo((pre: any) => {
                        return { ...pre, name: text }

                    })}
                    value={userInfo.name}
                    icon={require("../images/user.png")}
                    keyBoardType={'ascii-capable'} 
                    errorStyle={error.field == "name" && {
                        borderColor: "red"
                    }}
                    />

                <CustomInput
                     placeholder={ error.field == "email" ? error.message : 'Enter your email'}
                    onChangeText={(text: any) => setUserInfo((pre: any) => {
                        return { ...pre, email: text }

                    })}
                    value={userInfo.email}
                    icon={require("../images/email.png")}
                    keyBoardType={'ascii-capable'}
                    errorStyle={error.field == "email" && {
                        borderColor: "red"
                    }}
                    />


                <CustomInput
                    placeholder={ error.field === "phone" ? error.message : 'Enter your phone'}
                    onChangeText={(text: any) => setUserInfo((pre: any) => {
                        return { ...pre, phone: text }

                    })}
                    value={userInfo.phone}
                    icon={require("../images/phone.png")}
                    keyBoardType={'number-pad'}
                    errorStyle={error.field == "phone" && {
                        borderColor: "red"
                    }}
                    />


                <View style={style.formGroup}>
                    <CustomInput
                        placeholder={ error.field === "password" ? error.message : 'Enter your password'}
                        onChangeText={(text: any) => setUserInfo((pre: any) => {
                            return { ...pre, password: text }

                        })}
                        value={userInfo.password}
                        icon={require("../images/password.png")}
                        keyBoardType={'ascii-capable'}
                        secureTextEntry={!showPassword}
                        errorStyle={error.field == "password" && {
                            borderColor: "red"
                        }}
                    >

                    <TouchableOpacity style={style.toggleButton} onPress={() => setShowPassword(!showPassword)}>
                        <Text style={{
                            fontSize: 16
                        }}>{!showPassword ? "show" : " hide"}</Text>
                        {/* <Text> {!showPassword ? <Octicons name="eye" size={17} color="green" /> : <Octicons name="eye-closed" size={17} color="green" />}</Text> */}
                    </TouchableOpacity>
                    </CustomInput>
                </View>
                <View style={style.wrapper}>
                    {/* <CheckBox
                        value={agreed}
                        onValueChange={() => setAgreed(!agreed)}
                        color={agreed ? "#310" : undefined}
                    /> */}
                    <BouncyCheckbox
                            size={19}
                            fillColor="green"
                            unfillColor="#FFFFFF"
                            text="I have read and agreed with the terms and conditions"
                            iconStyle={{ borderColor: "green" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            // textStyle={{ fontFamily: "JosefinSans-Regular" }}
                            onPress={() => { setAgreed(!agreed) }}
                            // isChecked={agreed}
                            textStyle={{
                                textDecorationLine:"none"
                            }}
                            // disableText={true}
                        />
                    {/* <Text onPress={() => setAgreed(!agreed)} style={style.checkboxText}>I have read and agreed with the terms and conditions.</Text> */}
                </View>
                <TouchableOpacity style={[style.button, {
                    backgroundColor: agreed ? "#387" : "gray",
                }]} disabled={!agreed} onPress={loginUser}>
                    {
                        loading === true ? <Text style={style.buttonText}>Loading...</Text> :
                        <Text style={style.buttonText}>Register</Text>
                    }
                </TouchableOpacity>
            </View>
            <View style={{
                display: "flex",
                flexDirection: "row",
                
            }}>
                <Text> Already a member?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={{
                                color: "orange",
                                textDecorationLine: "underline",
                                
                            }}> Login </Text>
                
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={{
                    color: "green",
                    fontSize:19,
                }}>Skip</Text>
            </TouchableOpacity>
        </View>
                </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 10
    },
    title: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "darkgreen"
    },
    description: {
        paddingHorizontal: 10,
        paddingTop: 40,
        paddingBottom: 20,
        textAlign: "left",
        color: "darkgreen",
        fontSize: 13,
    },
    form: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        width:"100%",
    },
    formGroup: {
        // marginVertical: 2,
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 10,
        alignItems: "flex-start",

    },
    checkboxText: {
        marginLeft: 5,
        fontSize: 14,
        color: "darkgreen",
    },
    inputText: {
        width: "100%",
        fontSize: 16,
        color: "green",
    },
    inputControl: {
        width: "100%",
        marginVertical: 2,
        fontSize: 16,
        borderColor: "gray",
        borderBottomWidth: 2,
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
    toggleButton: {
        position: "absolute",
        right: 10,
        alignSelf:"center"
    },
    button: {
        backgroundColor: "green",
        paddingVertical: 15,
        width: 200,
        alignSelf: "center",
        marginVertical: 5,
        borderRadius: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    }
})

export default RegisterScreen