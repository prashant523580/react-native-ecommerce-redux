import { StyleSheet, Text, View, Image, Alert,ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux-store/store'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../Header'
import { ProductTypes } from '../../types/product'
import Card from '../card/Card'
import { addToCart, removeCart, resetCart } from '../../redux-store/actions/cart.action'
import CustomButton from '../common/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { ScreenNames } from '../../AppNavigation'

export default function CartComponent() {

  const state = useSelector((state: RootState) => state.carts)
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<ScreenNames>();

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      {
        Object.keys(state.carts).length > 0 ?

          (
            <View style={{
              width: "100%",
              justifyContent:"space-between"
            }}>
              <View>
                {
                  Object.keys(state.carts).map((key, index) => {
                    return (
                      <Card
                      isCartCard={true}
                        key={index}
                        item={state.carts[key]}
                        onRemove={() => {
                          dispatch(removeCart(state.carts[key]))
                        }}
                        cartIncrement={() => dispatch(addToCart(state.carts[key]))}
                      />
                    )
                  })
                }
              </View>
              <View
                style={{
                  flexDirection:"row",
                  justifyContent:"space-between"
                }}
              >
                  <Text>Total Amount</Text>
                  <Text>{state.subTotal}</Text>
                </View>
              <View style={{
                // position:"absolute",
                // bottom:0,
              }}>

                <CustomButton
                  title='Checkout'
                  fgColor='white'
                  bgColor='black'
                  width={"100%"}
                  my={10}
                  onPress={() => {
                    navigation.navigate("Checkout")
                  }}
                />
                <CustomButton
                  title='Clear Cart'
                  fgColor='white'
                  bgColor='red'
                  onPress={() => dispatch(resetCart())}
                />
              </View>
            </View>)
          :
          <Text style={{
            
          }}>No cart Items</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height:"100%",
    paddingHorizontal: 10,
  },
  commonText: {
    fontSize: 27,
    marginHorizontal: 10
  }
})