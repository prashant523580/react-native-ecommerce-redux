import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import CustomInput from '../components/customInput/CustomInput';
// import CheckBox from "expo-checkbox";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Modal/loader';
// import { Octicons } from '@expo/vector-icons';
interface UserTypes {
    email: string,
    password: string,
    name?: string,
    phone?: any
}
const LoginScreen = ({ navigation }: any) => {
    const [agreed, setAgreed] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState<UserTypes>({
        email: "",
        password: ""
    });
    const [auth, setAuth] = React.useState<UserTypes>({
        email: "user@gmail.com",
        password: "user",
        name: 'user',
        phone: 98787878
    });
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState({
        field: "",
        message: ""
    });
    const validate = (field: UserTypes) => {
        let errorObj: any = {
            field: "",
            message: ""
        }
        if (field.email === "") {
            errorObj.field = "email"
            errorObj.message = "Input email field."

        } else if (field.password === "") {
            errorObj.field = "password"
            errorObj.message = "Input password field"
        }

        return errorObj
    }
    const authHandler = async () => {
        try {

            let user: any = await AsyncStorage.getItem("user");
            if (user) {
                user = JSON.parse(user)
            } else {
                user = null
            };
            setAuth(user)
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        authHandler()
    }, [])
    const loginUser = () => {
        validate(userInfo)
        console.log(auth)
        setError(validate(userInfo))
        // Alert.alert(`Logged in as ${userInfo.email}`)
        if (userInfo.email && userInfo.password) {
            setLoading(true)
            if (auth != null) {

                if (auth.email === userInfo.email) {
                    setTimeout(() => {

                        navigation.navigate("Home", { auth: auth })
                        setLoading(false)
                    }, 3000)
                } else {
                    setTimeout(() => {

                        setLoading(false)
                        Alert.alert("!Invalid user.")
                    }, 3000)
                }
            } else {
                setTimeout(() => {

                    setLoading(false)
                    Alert.alert("!Invalid user.")
                }, 3000)

            }
        }
    }


    return (
        <ScrollView>

            <View style={style.container}>
                <Image style={style.logo} source={require("../images/logo.png")} />
                <Text style={style.title}>Tripods Nepal</Text>
                <Text style={[style.title, { fontSize: 16 }]}> Login</Text>
                {/* <Text style={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text> */}

                <View style={style.form}>
                    <CustomInput
                        placeholder={error.field === "email" ? error.message : 'Enter your email'}
                        errorStyle={error.field === "email" && {
                            borderColor: "red"
                        }}
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
                        // error.field === "email" &&
                        // <Text style={{
                        //     color: "red"
                        // }}> {error.message}</Text>
                    }
                    <View style={style.formGroup}>
                        <CustomInput
                            placeholder={error.field === "password" ? error.message : 'Enter your password'}
                            icon={require("../images/password.png")}
                            value={userInfo.password}
                            onChangeText={(text: any) => {
                                setUserInfo((pre: any) => {
                                    return { ...pre, password: text };

                                });
                            }}
                            secureTextEntry={!showPassword}
                            keyBoardType={'default'}
                            errorStyle={error.field == "password" && {
                                borderColor: "red"
                            }}
                        >

                            <TouchableOpacity style={style.toggleButton} onPress={() => setShowPassword(!showPassword)}>
                                <Text style={{
                                    fontSize: 16
                                }}>{!showPassword ? "show" : "hide"}</Text>
                                {/* <Text> {!showPassword ? <Octicons name="eye" size={17} color="green" /> : <Octicons name="eye-closed" size={17} color="green" />}</Text> */}
                            </TouchableOpacity>
                        </CustomInput>
                        {
                            // error.field === "password" &&
                            // <Text style={{
                            //     color: "red"
                            // }}> {error.message}</Text>
                        }
                    </View>
                    <View style={style.wrapper}>
                        {/* <CheckBox 
                        
                        value={agreed}
                        onValueChange={() => setAgreed(!agreed)}
                        color={agreed ? "#310" : undefined}
                    /> */}
                        {/* <BouncyCheckbox
                            size={19}
                            fillColor="green"
                            unfillColor="#FFFFFF"
                            text="I have read and agreed with the terms and conditions"
                            iconStyle={{ borderColor: "green" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            onPress={() => { setAgreed(!agreed) }}
                            isChecked={agreed}
                            textStyle={{
                                textDecorationLine:"none"
                            }}
                        /> */}
                        {/* <Text onPress={() => setAgreed(!agreed)} style={style.checkboxText}>I have read and agreed with the terms and conditions.</Text> */}
                    </View>
                    <TouchableOpacity style={[style.button, {
                        backgroundColor: "#387",
                    }]} onPress={loginUser}>
                        {
                            loading === true ? <Text style={style.buttonText}>Loading...</Text> :
                                <Text style={style.buttonText}>Login</Text>
                        }
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
                        color: "green",
                        fontSize: 19,
                    }}>Skip</Text>
                </TouchableOpacity>
            </View>
            <Loader modalVisible={loading} />
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
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: "100%"
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
        alignSelf: "center"
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