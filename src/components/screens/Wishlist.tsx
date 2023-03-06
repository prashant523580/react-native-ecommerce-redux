import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../../redux-store/store'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../Header'
import { ProductTypes } from '../../types/product'
import Card from '../card/Card'
import { removeWishlist } from '../../redux-store/actions/cart.action'

export default function WishlistComponent() {

  const state = useSelector((state: RootState) => state.wishlists)
  const dispatch = useDispatch();
  React.useEffect(() => {
    // console.log(state.carts)
  }, [state])
  return (
    <View style={styles.container}>
      <Header/>
      {
        state.wishlists.length > 0  ?
       
        state.wishlists.map((item :ProductTypes,index:number) => {
          return(
            <Card
            isCartCard={false}
            key={index}
            item={item}
            onRemove={() => {
              dispatch(removeWishlist(index))
            }}
           
            />
          )
        })
        :
        <Text>No wishlists item.</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:"center",
  alignItems:"center"
},
  commonText: {
    fontSize: 27,
    marginHorizontal: 10
  }
})