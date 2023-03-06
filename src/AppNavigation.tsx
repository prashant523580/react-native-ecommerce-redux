import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import Splash from './screens/Splash';
import HomeScreen from './screens/Home';
import RegisterScreen from './screens/Signup';
import { useDispatch } from 'react-redux';
import { getProducts } from './redux-store/actions/product.action';
import ProductDetails from './screens/ProductDetails';
import Address from './screens/Address';
import AddAddress from './screens/AddAddress';
import Checkout from './screens/Checkout';

export type ScreenNames = {
  navigate(arg0: string): unknown;
  "Splash" : undefined,
 "Home" : undefined,
 "Login" :undefined,
  "Register": undefined,
  "ProductDetails":{product:any },
  "Address": undefined,
  "AddAddress": undefined,
  "Checkout": undefined
}
// export type ScreenNames = ["Splash","Home","Login","Register","ProductDetails"]
 // type these manually
// export type RootStackParamList = Record<ScreenNames[number], undefined>;
// export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;
const Stack = createStackNavigator<ScreenNames>();
export default function AppNavigation() {
 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen options={{
            headerShown:false
        }} name='Splash' component={Splash}/>
        <Stack.Screen options={{
            headerShown:false
        }} name='Login' component={LoginScreen}/>
        <Stack.Screen options={{
          headerShown: false
        }} name="Register" component={RegisterScreen}/>
        <Stack.Screen options={{
            headerShown:false
        }} name='Home' component={HomeScreen}/>
        <Stack.Screen options={{
            // headerShown:false
            title:"Details"
        }} name='ProductDetails' component={ProductDetails}/>
        <Stack.Screen options={{
            headerShown:false,
        }} name='Address' component={Address}/>
        <Stack.Screen options={{
            headerShown:false,
        }} name='AddAddress' component={AddAddress}/>
        <Stack.Screen options={{
            headerShown:false,
        }} name='Checkout' component={Checkout}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})