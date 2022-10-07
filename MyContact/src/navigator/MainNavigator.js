import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import ContactListScreen from '../screens/ContactListScreen'
import AddContactListScreen from '../screens/AddContactScreen'


const Stack = createStackNavigator()

const MainNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ContactList">
                <Stack.Screen name="ContactList" component={ContactListScreen}  options={{headerShown : false}} />
                <Stack.Screen name="AddContact" component={AddContactListScreen}  options={{headerShown : false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator