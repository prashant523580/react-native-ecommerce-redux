import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux-store/store'
import Card from '../components/card/Card';
import OrderCard from '../components/card/OrderCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Addresses } from '../components/UI/Address';
import Divider from '../components/Divider';


export default function Orders() {

    const { orders: { orders } } = useSelector((state: RootState) => state);

    React.useEffect(() => {
        console.log(orders)
    }, [orders])
    return (
        <ScrollView style={{
            paddingHorizontal: 10,
            // backgroundColor:"green"
        }}>
            {
                orders.map((order: any, ind: number) => {
                    return (
                        <View key={ind} style={{
                            // paddingHorizontal: 10,
                            backgroundColor: "lightblue",
                            marginVertical: 10,
                            borderRadius: 5,
                            paddingBottom: 10,
                            overflow:"hidden"
                        }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                backgroundColor: "gray",
                                width: "100%",
                                padding: 5

                            }}>
                                <Text style={styles.commonText}>OrderId : #099989898776</Text>
                                <View style={{
                                    alignItems: "flex-end"
                                }}>

                                    <Text style={styles.commonText}>order status: pending</Text>
                                    <Text style={styles.commonText}>payment status: pending</Text>
                                </View>
                            </View>
                            <View style={styles.orderBody}>

                                <Text style={styles.title}>Address</Text>
                                <Divider/>
                                <View>
                                    <Addresses addrs={order.address} />
                                    {/* <Text>{order.address.name}</Text>
                                    <Text>{order.address.email}</Text>
                                    <Text>{order.address.city}</Text>
                                    <Text>{order.address.street}</Text>
                                    <Text>{order.address.phone}</Text> */}
                                </View>
                                <Text style={styles.title}>Orders</Text>
                                <Divider/>
                                <View style={{
                                    marginVertical: 5
                                }}>
                                    {
                                        Object.keys(order.orders).map((key) => {
                                            return (
                                                <OrderCard
                                                    key={key}
                                                    item={order.orders[key]}
                                                />
                                            )
                                        })
                                    }
                                </View>
                            </View>
                            <TouchableOpacity style={{
                                backgroundColor: "red",
                                width: 100,
                                padding: 10,
                                alignSelf: "flex-end",
                                marginRight: 10,
                                elevation: 1
                            }}>
                                <Text style={{
                                    color: "white",
                                    textAlign: "center"
                                }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    orderBody: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    title: {
        fontSize: 20,
        // textAlign: "center",
        // borderBottomWidth: 2,
        // borderBottomColor: "black",
        // width: "20%",
        fontWeight:"bold",
        color:"black",
        // marginVertical: 10,
        paddingVertical: 3,
        // borderRadius: 10

    },
    commonText:{
        textTransform:"capitalize",
        color:"white"
    }
})