import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import realm from '../../store'

const AddContactScreen = (props) => {
    const {navigation} = props
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const saveData= () => {
        if(name !== '' && number !== ''){
            realm.write(() => {
                const data = realm.objects('Contact')
                const lastId = data.length === 0 ? 1 : data[data.length - 1].id;
                realm.create('Contact', {
                    id : data.length === 0 ? 1 : lastId + 1,
                    name :  name,
                    phoneNumber : number
                })
            })
            navigation.navigate("ContactList")
        }else{
            alert("Cannot save the contact")
        }
    }
  return (
    <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Add Contact</Text>
        </View> 
        <View style={styles.contactContainer}>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Name</Text>
                <TextInput placeholder="Write Name here" style={styles.input} onChangeText={(text) => setName(text)} />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Phone Number</Text>
                <TextInput placeholder="Write PhoneNumber here" style={styles.input} keyboardType="number-pad" onChangeText={(text) => setNumber(text)} />
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonTouch} onPress={() => saveData()}>
                <Text style={styles.textButton}>Save Contact</Text>
            </TouchableOpacity>
        </View>
    </View>
    
  )
}
const styles = StyleSheet.create({
    mainContainer : {
        flex : 1
    }, headerContainer : {
        padding: 8,
        backgroundColor : '#B7F1D4',
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'center'
    }, title : {
        fontSize : 20, 
        padding: 8,
        fontWeight : 'bold',
    }, button : {
        padding: 8
    }, contactContainer : {
        margin: 25
    }, input: {
        borderColor: 'black',
        borderWidth : 1,
        borderRadius : 15, 
        padding: 7,
        paddingLeft : 12,
    }, formTitle : {
        marginBottom : 10,
        marginTop: 10
    }, buttonTouch : {
        backgroundColor : '#B7F1D4',
        width: '30%',
        padding: 14,
        borderRadius : 10,
        marginTop: 20
    }, buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'center'
    }, textButton : {
        textAlign : 'center',
        fontWeight : 'bold'
    }
})
export default AddContactScreen