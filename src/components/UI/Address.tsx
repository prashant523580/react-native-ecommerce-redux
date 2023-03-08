import { StyleSheet,View, Image,Text} from "react-native";
export const AddressComponent = ({ title, icon }: any) => {
    return (
        <View style={styles.address}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.addressText}>{title}</Text>
        </View>
    )
}
export const Addresses = ({ onPress, addrs }: any) => {
    return (
        <View style={{
            flexDirection: "row",
            elevation: 1,
            backgroundColor: "white",
            marginVertical: 10,
            paddingVertical: 10,
            paddingHorizontal: 10,
            // justifyContent: "center",
            // alignItems: "center",
            borderRadius: 10

        }}>
            <View style={{
                // width: "70%"
            }}>

                <AddressComponent title={addrs.name} icon={require("../../images/navigation-icon/account.png")} />
                <AddressComponent title={addrs.email} icon={require("../../images/email.png")} />
                <AddressComponent title={addrs.city} icon={require("../../images/icon/city.png")} />
                <AddressComponent title={addrs.street} icon={require("../../images/icon/pin.png")} />
                <AddressComponent title={addrs.phone} icon={require("../../images/mobile.png")} />

            </View>
           
        </View>
    )
}


const styles = StyleSheet.create({

    address: {
        marginVertical: 1,
        flexDirection: "row",
        // alignItems: "center",
        // width: "80%",
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
})