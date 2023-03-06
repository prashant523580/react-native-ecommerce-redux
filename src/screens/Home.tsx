import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../components/card/ProductCard';
import Divider from '../components/Divider';
import Loader from '../components/Modal/loader';
import { ScrollView } from 'react-native-gesture-handler';
import SearchComponent from '../components/screens/Search';
import CartComponent from '../components/screens/Cart';
import WishlistComponent from '../components/screens/Wishlist';
import ProfileComponent from '../components/screens/Profile';
import MainComponent from '../components/screens/Main';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-store/store';
import { getProducts } from '../redux-store/actions/product.action';

export default function HomeScreen({ route, navigate }: any) {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const { carts, wishlists,products } = useSelector((state: RootState) => state);

const dispatch = useDispatch<any>();
React.useEffect(() => {
 dispatch(getProducts())

},[])
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={{
        marginBottom: 60
      }}>


        {
          selectedTab == 0 ? (<MainComponent products={products.products}/>) : selectedTab == 1 ? (<SearchComponent />) : selectedTab == 2 ? <CartComponent /> : selectedTab == 3 ? <WishlistComponent /> : selectedTab == 4 && <ProfileComponent navigate={navigate} />}
      </ScrollView>


      <View style={styles.navigation}>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedTab(0)}>
          <Image style={[styles.icon, {
            tintColor: selectedTab == 0 ? "black" : "#777"
          }]} source={require("../images/navigation-icon/home.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedTab(1)}>
          <Image style={[styles.icon, {
            tintColor: selectedTab == 1 ? "black" : "#777"
          }]} source={require("../images/navigation-icon/search.png")} />
        </TouchableOpacity>
        <View style={[styles.button, {
          // bottom: 20
        }]}>

          <TouchableOpacity style={[styles.button, {
            backgroundColor: selectedTab === 2 ? "green" : "lightgreen",
            width: 50,
            height: 50,
            borderRadius: 50,
          }]} onPress={() => setSelectedTab(2)}>
            <Image style={{ width: 25, height: 25, tintColor: selectedTab === 2 ? "white" : "black" }} source={require("../images/navigation-icon/shopping-bag.png")} />
            {
              Object.keys(carts.carts).length > 0 ?
                <View
                  style={{
                    width: 17,
                    height: 17,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "#33caeb"
                  }}
                >
                  <Text style={{
                    color: "white",
                    fontSize: 11
                  }}>{Object.keys(carts.carts).length}</Text>
                </View>
                : null
            }
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => setSelectedTab(3)}>
          <Image style={[styles.icon, {
            tintColor: selectedTab === 3 ? "black" : "#777"
          }]} source={require("../images/navigation-icon/heart.png")} />
         {
          wishlists.wishlists.length > 0 ?
          
          <View
            style={{
              width: 17,
              height: 17,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",

              top: 10,
              right: 10,
              backgroundColor: "#33caeb"
            }}
          >
            <Text style={{
              color: "white",
              fontSize: 11
            }}>{wishlists.wishlists.length}</Text>
          </View>
          : null
}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedTab(4)}>
          <Image style={[styles.icon, {
            tintColor: selectedTab == 4 ? "black" : "#777"
          }]} source={require("../images/navigation-icon/user.png")} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },


  navigation: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    // height:100,
    display: "flex",
    alignItems: 'center',
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",

    paddingVertical: 5,
  },
  button: {
    // width: "20%",
    // height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  icon: {
    width: 24,
    height: 24
  }
})