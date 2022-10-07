import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen.js'
import DetailScreen from '../screens/DetailScreen.js'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={
                    {title : 'Home', headerStyle : {
                        backgroundColor : '#CAB0C3'
                    },headerTitleStyle : {
                        color : 'white',
                        fontSize : 20
                    }, headerTitleAlign: 'center',
                    headerLeft: null
                }
                } />
        <Stack.Screen name="Detail" component={DetailScreen} options={
                    {title : 'Detail', headerStyle : {
                        backgroundColor : '#CAB0C3'
                    },headerTitleStyle : {
                        color : 'white',
                        fontSize : 20
                    }, headerTitleAlign: 'center',
                    headerLeft: null
                }
                } />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator