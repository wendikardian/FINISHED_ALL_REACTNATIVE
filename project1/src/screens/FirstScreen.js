
import React from 'react';
import {View, Text, Button} from 'react-native';

const FirstScreen = () => {
    const openAlert = () => {
        alert("Hello :) ")
    };

    return(
        <View style={{
            flex: 1,
            alignItems:'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                margin: 16
            }}>Hello <Text style={{
                    color: 'red'        
                }}> World !</Text>
            </Text>
            <Button title="This is button" onPress={openAlert} />
        </View>
    )
}


const ChallangeScreen = () => {
    const challangeAlert = () => {
        alert("Tapi Boong")
    }

    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{color: 'green', margin:20}}>let's Learn React Native Framework</Text>
            <Text>My name is Wendi</Text>
            <Text style={{margin: 14, textAlign: 'center'}}>Now i'm learning about <Text style={{color: 'blue'}}>React Native Components</Text>to Build an APP</Text>
            <Text style={{marginBottom: 17, color:'red'}}>I LOVE CODING</Text>
            <Button title="CLICK ME" onPress={challangeAlert} />
        </View>
    )
}

export default ChallangeScreen;