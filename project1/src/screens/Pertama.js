import { View, Text, Button } from 'react-native'
import React from 'react'


const Pertama = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pertama, Hello World My name is <Text style={{backgroundColor: 'red'}}>Wendi</Text></Text>
    </View>
  )
}

const ChallangeFirst = () => {
    const helloClick = () => {
        alert("Hello World !! My name is Wendi")
    }
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{backgroundColor: 'aqua', padding: 10, borderRadius: 20}}>Hello World</Text>
            <Text style={{margin: 20, borderColor: 'black', borderWidth: 1, padding: 20, borderRadius: 20}}>My name is <Text style={{color: 'red'}}> Wendi</Text></Text>
            <Button title="Click me" onPress={helloClick}/>
        </View>
    )
}

export default ChallangeFirst