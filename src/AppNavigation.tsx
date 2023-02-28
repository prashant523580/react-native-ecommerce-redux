import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import Splash from './screens/Splash';
import HomeScreen from './screens/Home';
import RegisterScreen from './screens/Signup';

const Stack = createStackNavigator();
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
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})