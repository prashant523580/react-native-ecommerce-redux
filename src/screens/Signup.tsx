import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
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

    const loginUser = () => {
        console.log(userInfo)
        // Alert.alert(`Logged in as ${userInfo.email}`)
        navigation.navigate("Home", { user: userInfo })
    }
    return (
        <ScrollView>

        <View style={style.container}>
            <Image style={style.logo} source={require("../images/logo.png")} />
            <Text style={style.title}>Register Form</Text>
            <Text style={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

            <View style={style.form}>
                <CustomInput
                    placeholder={'Enter your name'}
                    onChangeText={(text: any) => setUserInfo((pre: any) => {
                        return { ...pre, name: text }

                    })}
                    value={userInfo.name}
                    icon={require("../images/user.png")}
                    keyBoardType={'ascii-capable'} />

                <CustomInput
                    placeholder={'Enter your email'}
                    onChangeText={(text: any) => setUserInfo((pre: any) => {
                        return { ...pre, email: text }

                    })}
                    value={userInfo.email}
                    icon={require("../images/email.png")}
                    keyBoardType={'ascii-capable'} />


                <CustomInput
                    placeholder={'Enter your phone number'}
                    onChangeText={(text: any) => setUserInfo((pre: any) => {
                        return { ...pre, phone: text }

                    })}
                    value={userInfo.phone}
                    icon={require("../images/phone.png")}
                    keyBoardType={'number-pad'} />


                <View style={style.formGroup}>
                    <CustomInput
                        placeholder={'Enter your password'}
                        onChangeText={(text: any) => setUserInfo((pre: any) => {
                            return { ...pre, password: text }

                        })}
                        value={userInfo.password}
                        icon={require("../images/password.png")}
                        keyBoardType={'ascii-capable'}
                        secureTextEntry={!showPassword}
                    >

                    <TouchableOpacity style={style.toggleButton} onPress={() => setShowPassword(!showPassword)}>
                        <Text>{!showPassword ? "show" : " hide"}</Text>
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
                    <Text onPress={() => setAgreed(!agreed)} style={style.checkboxText}>I have read and agreed with the terms and conditions.</Text>
                </View>
                <TouchableOpacity style={[style.button, {
                    backgroundColor: agreed ? "#387" : "gray",
                }]} disabled={!agreed} onPress={loginUser}>
                    <Text style={style.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                display: "flex",
                flexDirection: "row",
                
            }}>
                <Text> Already a member?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={{
                    color: "orange",
                    textDecorationLine: "underline",
                    
                }}> Login </Text></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={{
                    color: "green"
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
        fontSize: 30,
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
        paddingVertical: 20
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
        bottom: 20,
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