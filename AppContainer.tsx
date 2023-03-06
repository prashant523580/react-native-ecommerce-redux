import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/AppNavigation'
import { useDispatch } from 'react-redux';
import { getProducts } from './src/redux-store/actions/product.action';

export default function Main() {
  const dispatch = useDispatch<any>();
  // const store = useSelector((state: RootState) => state.products )
  React.useEffect(() => {
      dispatch(getProducts());
  },[])
  return (
    <AppNavigation/>
  )
}

const styles = StyleSheet.create({})