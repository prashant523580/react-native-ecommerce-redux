import { StyleSheet, Text, View, Image, ScrollView, Modal, Pressable, Alert } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux-store/store'
import { ProductTypes } from '../types/product'
import Card from '../components/card/Card'
import { addToCart, removeCart } from '../redux-store/actions/cart.action'
import CustomButton from '../components/common/CustomButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { addAddress, isAuthenticate } from '../redux-store/actions/user.action'
import { UserAddressTypes } from '../types/user'
import CustomInput from '../components/customInput/CustomInput'
const CheckoutHeader = (props: any) => {
    return (
        <View style={{
            flexDirection: "row",
            width: "100%",
            backgroundColor: props.active ? "black" : "#777",
            paddingHorizontal: 10,
            paddingVertical: 10,
            alignItems: 'center',
            borderBottomColor: "gray",
            borderBottomWidth: 3,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            // justifyContent:"center"
        }}>

            <Image source={props.image}
                style={{
                    width: 24,
                    height: 24,
                    tintColor: "white"
                }}
            />
            <Text style={{
                color: "white",
                marginLeft: 10,
                textTransform: "capitalize",
                fontWeight: "bold"
            }}>Step {props.step} : {props.title}</Text>

        </View>
    )
}
const AddressComponent = ({ title, icon }: any) => {
    return (
        <View style={styles.address}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.addressText}>{title}</Text>
        </View>
    )
}
export default function Checkout() {
    const [addressChecked, setAddressChecked] = React.useState(false);
    const [selectedAddress, setSelectedAddress] = React.useState<UserAddressTypes>({});
    const [isOpen, setIsOpen] = React.useState(false);

    const [modalVisible, setModalVisible] = React.useState(false);
    const [userAddress, setUserAddress] = React.useState<UserAddressTypes>({
        name: "",
        city: "",
        street: "",
        phone: "",
        email: ""
    });
    const handleAddressForm = () => {
        if (userAddress.city && userAddress.email && userAddress.street && userAddress.phone && userAddress.name) {
            console.log(address)

            dispatch(addAddress(userAddress))
            setModalVisible(false)
        } else {
            Alert.alert("please fill all input fields")
        }
    }

    const [cartChecked, setCartChecked] = React.useState(false);
    const { carts: { carts, subTotal }, user: { authenticate, user, address } } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<any>();

    return (
        <ScrollView style={styles.mainContainer}>
            {/* add address */}
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        // Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight:"bold",
                                marginVertical: 5
                            }}>Add New Address</Text>
                            <View style={styles.formContainer}>
                                <CustomInput
                                    icon={require("../images/user.png")}
                                    placeholder={"Full Name"}
                                    keyBoardType={'ascii-capable'}
                                    value={userAddress.name}
                                    onChangeText={(text: string) => {
                                        setUserAddress((pre: any) => {
                                            return {
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
                                    value={userAddress.city}
                                    onChangeText={(text: string) => {
                                        setUserAddress((pre: any) => {
                                            return {
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
                                    value={userAddress.street}
                                    onChangeText={(text: string) => {
                                        setUserAddress((pre: any) => {
                                            return {
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
                                    value={userAddress.email}
                                    onChangeText={(text: string) => {
                                        setUserAddress((pre: any) => {
                                            return {
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
                                    value={userAddress.phone}
                                    onChangeText={(text: string) => {
                                        setUserAddress((pre: any) => {
                                            return {
                                                ...pre,
                                                phone: text
                                            }
                                        })
                                    }}
                                />
                                <Pressable style={[styles.button,{
                                    width:150,
                                    alignSelf:"center"
                                }]} onPress={handleAddressForm}>
                                    <Text style={{ color: "white", textTransform: "capitalize",textAlign:"center" }}>Save address</Text>
                                </Pressable>
                                
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>
            {/* add address end */}
            <View style={styles.container}>
                <CheckoutHeader active={authenticate === true} step={1} title="Login" image={require("../images/user.png")} />
                <View style={styles.checkoutBody}>
                    {authenticate ?
                        <>
                            <Text>{user.name}</Text>
                            <Text>{user.email}</Text>
                        </> :
                        <TouchableOpacity
                            style={{
                                backgroundColor: "black"
                            }}
                            onPress={() => {
                                dispatch(isAuthenticate())
                            }}>
                            <Text style={{ color: "black" }}>Login</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
            {/* address start */}
            <View style={styles.container}>
                <CheckoutHeader active={authenticate === true} step={2} title="Delivery Address" image={require("../images/icon/pin.png")} />

                <View style={styles.checkoutBody}>

                    {
                        selectedAddress.email ? <View style={{
                            elevation: 2,
                            backgroundColor: "white",
                            marginVertical: 10,
                            paddingVertical: 10,
                            paddingHorizontal: 5
                        }}>
                            <AddressComponent title={selectedAddress.name} icon={require("../images/user.png")} />
                            <AddressComponent title={selectedAddress.email} icon={require("../images/email.png")} />
                            <AddressComponent title={selectedAddress.city} icon={require("../images/icon/city.png")} />
                            <AddressComponent title={selectedAddress.street} icon={require("../images/icon/pin.png")} />
                            <AddressComponent title={selectedAddress.phone} icon={require("../images/mobile.png")} />

                        </View> :
                            address &&
                            address.map((addrs: UserAddressTypes, ind: number) => {
                                return (
                                    <View key={ind} style={{
                                        flexDirection: "row",
                                        elevation: 2,
                                        backgroundColor: "white",
                                        marginVertical: 10,
                                        paddingVertical: 10,
                                        justifyContent: "space-around",
                                        alignItems: "center",

                                    }}>
                                        <View>

                                            <AddressComponent title={addrs.name} icon={require("../images/user.png")} />
                                            <AddressComponent title={addrs.email} icon={require("../images/email.png")} />
                                            <AddressComponent title={addrs.city} icon={require("../images/icon/city.png")} />
                                            <AddressComponent title={addrs.street} icon={require("../images/icon/pin.png")} />
                                            <AddressComponent title={addrs.phone} icon={require("../images/mobile.png")} />

                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setAddressChecked(true);
                                                setSelectedAddress(addrs)

                                            }}
                                        >
                                            {/* <Image style={{
                                            width: 24,
                                            height: 24,
                                            tintColor: "white"
                                        }} 
                                            source={}
                                        /> */}
                                            <Text>select</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                    }
                    <View
                        style={styles.stepButton}
                    >
                            {!addressChecked &&
                        <CustomButton fgColor='white' bgColor='black' title='Add Address' onPress={() => {
                            setModalVisible(true)
                        }} />
                    }

                    </View>

                </View>
            </View>
            {/* address end */}
            {/* cart review start */}
            <View style={styles.container}>
                <CheckoutHeader active={addressChecked === true} step={3} title="cart reviews" image={require("../images/icon/shopping-cart.png")} />
                {
                    addressChecked === true &&
                    <View style={styles.checkoutBody}>

                        {
                            Object.keys(carts).length > 0 ?
                                Object.keys(carts).map((key, index: number) => {
                                    return (
                                        <Card
                                            isCartCard={true}
                                            key={index}
                                            item={carts[key]}
                                            onRemove={() => {
                                                dispatch(removeCart(carts[key]))
                                            }}
                                            cartIncrement={() => dispatch(addToCart(carts[key]))}
                                        />
                                    )
                                })
                                : ""
                        }
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            borderBottomColor: 'gray',
                            borderBottomWidth: 2,
                            borderTopWidth: 2,
                            marginVertical: 5,
                            paddingVertical: 5,
                        }}>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 18
                            }}>SubTotal</Text>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 15
                            }}>{subTotal}</Text>
                        </View>

                        {
                            cartChecked === false &&
                            <View style={styles.stepButton}>

                                <CustomButton fgColor='white' bgColor='black' title='next' onPress={() => {
                                    setCartChecked(true)
                                }} />
                            </View>
                        }
                    </View>
                }
            </View>
            {/* cart review end */}
            {/* payment start */}
            <View style={styles.container}>
                <CheckoutHeader image={require("../images/credit-card.png")} step={4} title={"Payment Methods"} />
                {
                    cartChecked &&
                    <View style={styles.checkoutBody}>
                        <TouchableOpacity style={styles.button}>

                            <Text style={styles.buttonText}> Cash On Delivery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>

                            <Text style={styles.buttonText}> ESewa</Text>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity style={[styles.button, {
                                width: 100,
                                backgroundColor: "green"
                            }]}>

                                <Text style={[styles.buttonText]}> Order {subTotal}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                }
            </View>
            {/* payment end */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // alignItems:"center",
        // justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    container: {
        // marginVertical: 10,
        // elevation: 1,
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: 4
    },
    checkoutBody: {
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    stepButton: {
        width: 100,
        position: "relative",
        right: 0,
        // bottom: 5
        alignSelf: "flex-end"
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "gray",
        marginVertical: 5,
        marginHorizontal: 5
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    address: {
        marginVertical: 1,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent:"center",
    },
    addressText: {
        color: "gray",
        marginLeft: 5
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: "gray"
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        // width: 200,
        // height: 200,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        // flex: 1,
        justifyContent: "center",
    },
    //   button: {
    //     borderRadius: 20,
    //     padding: 10,
    //     elevation: 2,
    //   },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})