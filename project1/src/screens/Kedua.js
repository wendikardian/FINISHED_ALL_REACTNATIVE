import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const Kedua = () => {
    const sayHello = () => {
        alert("HAIIII")
    }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <TouchableOpacity style={{backgroundColor: 'cyan', padding: 10, margin: 20, borderRadius: 20, borderStyle: 'dotted', borderWidth: 3, borderColor: 'red'}} onPress={() => sayHello() }>
      <Text >Mobile Legends</Text>
    </TouchableOpacity>
      <Text style={{backgroundColor: 'pink', padding: 10, margin: 5, borderRadius: 20, borderStyle: 'dashed', borderWidth: 5, borderColor: 'yellow', color: 'white', fontSize: 20, }}>PUBG</Text>
    </View>
  )
}

export default Kedua