import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Divider from './Divider'
import { Alert } from 'react-native/Libraries/Alert/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux-store/store'
import { addToCart, addToWishlist } from '../redux-store/actions/cart.action'
import { useNavigation } from '@react-navigation/native'
import { ScreenNames } from '../AppNavigation'
import ProductCard from './card/ProductCard'
// import { StackNavigation } from '../AppNavigation'

export default function CustomFlatlist(props: any) {
  const state = useSelector((state: RootState) => state.carts);
  const navigation = useNavigation<any>();
  React.useEffect(() => {
    // console.log(state)
  }, [state])
  const dispatch = useDispatch<any>();
  return (
    <View  style={styles.container}>

      <View style={styles.header}>


        <Text style={{
          fontSize: 30,
          fontWeight: "bold",
          // textAlign: "center",
          // paddingVertical: 10,

        }}>{props.title}</Text>
        <Divider style={{
          marginLeft: 10
        }} />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatContainer}
        data={props.data}
        keyExtractor={({ id }) => id}
        // numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <ProductCard
              img={item.image}
              name={item.title}
              category={item.category}
              price={item.price}
              product={item}
              onClick={() => {
                  navigation.navigate("ProductDetails",{product: item})
              }}
              onCartClick={() => {
                dispatch(addToCart(item))
              }}
              onWishlistClick={() => {
                dispatch(addToWishlist(item))
              }}
            />
          )
        }}
      />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical:15
  },
  header: {
    // alignItems: "center",
    // justifyContent: "center"
  },
  flatContainer: {
    // width: "100%",
    // paddingHorizontal: 10,
  },
})