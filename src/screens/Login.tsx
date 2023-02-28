import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import CustomInput from '../components/customInput/CustomInput';
// import CheckBox from "expo-checkbox";
// import { Octicons } from '@expo/vector-icons';
interface UserTypes {
    email: string,
    password: string
}
const LoginScreen = ({ navigation }: any) => {
    const [agreed, setAgreed] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState<UserTypes>({
        email: "",
        password: ""
    })
    const [error, setError] = React.useState({
        field: "",
        message: ""
    });
    const validate = (field: UserTypes) => {
        let errorObj: { field: string, message: string } = {
            field: "",
            message: ""
        }
        if (field.email == "") {
            errorObj.field = "email"
            errorObj.message = "input email field."
        } else if (field.password == "") {
            errorObj.field = "password",
                errorObj.message = "input password field"
        }
        return errorObj
    }

    const loginUser = () => {
        console.log(validate(userInfo))
        setError(validate(userInfo))
        // Alert.alert(`Logged in as ${userInfo.email}`)
        // navigation.navigate("Home", { user: userInfo })
    }
    return (
        <ScrollView>

        <View style={style.container}>
            <Image style={style.logo} source={require("../images/logo.png")} />
            <Text style={style.title}>Login Form</Text>
            {/* <Text style={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text> */}

            <View style={style.form}>
                <CustomInput
                    placeholder='Enter your email'
                    icon={require("../images/email.png")}
                    value={userInfo.email}
                    onChangeText={(text: any) => {
                        setUserInfo((pre: any) => {
                            return { ...pre, email: text }

                        })
                    }}
                    
                    keyBoardType={"email-address"}
                />
                {
                        error.field === "email" &&
                        <Text style={{
                            color: "red"
                        }}> {error.message}</Text>
                    }
                <View style={style.formGroup}>
                    <CustomInput
                        placeholder='Enter your password'
                        icon={require("../images/password.png")}
                        value={userInfo.password}
                        onChangeText={(text: any) => {
                            setUserInfo((pre: any) => {
                                return { ...pre, password: text };

                            });
                        }}
                        secureTextEntry={!showPassword}
                        keyBoardType={'default'} >

                        <TouchableOpacity style={style.toggleButton} onPress={() => setShowPassword(!showPassword)}>
                            <Text>{!showPassword ? "show" : "hide"}</Text>
                            {/* <Text> {!showPassword ? <Octicons name="eye" size={17} color="green" /> : <Octicons name="eye-closed" size={17} color="green" />}</Text> */}
                        </TouchableOpacity>
                        </CustomInput>
                    {
                        error.field === "password" &&
                        <Text style={{
                            color: "red"
                        }}> {error.message}</Text>
                    }
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
                    <Text style={style.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                display: "flex",
                flexDirection: "row",

            }}>
                <Text>Don't have account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}><Text style={{
                    color: "orange",
                    textDecorationLine: "underline",

                }}> register </Text></TouchableOpacity>
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
        color: "black"
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
        bottom:  10,
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

export default LoginScreen