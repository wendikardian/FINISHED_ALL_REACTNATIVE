import React from 'react'
import { View, Text, Button} from 'react-native'

const ScreenPertama = () => {
    const openAlert = () => {
        alert("You clicked the button")
    }

    return(
        <View style={{
            flex: 1,
            alignItems : 'center',
            justifyContent : 'center'
        }}>
            <Text>Hello My name is <Text style={{color : 'red', fontSize: 32}}> Wendi </Text></Text>
            <Button title="Click me" onPress={openAlert} />
        </View>
    )
}


export default ScreenPertama

