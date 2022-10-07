import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export const ButtonComponent = (props) => {
  return (
    <View style={styles.mainButtonContainer}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity {...props}>
                <Text style={{color: 'white'}}>SEE DETAILS</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainButtonContainer : {
        alignItems : 'baseline'
    }, buttonContainer : {
        marginTop : 8,
        borderColor: '#A6A6BD',
        borderRadius : 10,
        borderWidth : 1,
        alignItems : 'center',
        padding: 8,
        backgroundColor : '#AFCAE8',
        color: 'white'
    }
})