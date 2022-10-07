import React, {useState, useEffect} from 'react'
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {Icon} from 'react-native-elements'
import realm from '../../store'

const ContactListScreen = (props) => {
  const {navigation} = props;
  const [data, setData] = useState([])
  useEffect(() => {
    const contactListPage = navigation.addListener('focus', () => {
      const contact = realm.objects('Contact')
      const newContact = contact.map((item) => {
        return item
      })
      setData(newContact)
    })
    return contactListPage
  }, [])

  const deleteContact = (id) => {
    const data = realm.objects('Contact').filtered(`id = ${id}`)
    realm.write(() => {
      realm.delete(data)
    })
    const collectData = realm.objects('Contact')
    setData(collectData)
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Contact List</Text>
      </View>
      <FlatList contentContainerStyle={styles.flatListContainer} data={data} keyExtract={(item) => item.id} showsVerticalScrollIndicator={false} 
      renderItem={({item}) => {
        return(
          <View style={styles.mainDataContainer}>
            <View style={styles.information}>
              <Text style={styles.contactText}>{item.name}</Text>
              <Text>+{item.phoneNumber}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteContact(item.id)}>
              <Icon name="cross" type="entypo" />
            </TouchableOpacity>
          </View>
        )
      }}
      ListEmptyComponent={
        <View style={{alignItems: 'center', margin: 8}}>
          <Text>
            No Items 
          </Text>
        </View>
      }
      />
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddContact')}  >
        <Icon name="plus" type="antdesign" size={24} color="white" />
      </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    flex : 1,
    backgroundColor: 'white'
  }, headerContainer : {
    padding: 10,
    backgroundColor: '#B7F1D4',
    justifyContent : 'center',
    alignItems : 'center'
  }, headerTitle : {
    fontSize: 20,
    padding: 8,
    fontWeight: 'bold'
  }, buttonContainer : {
    position: 'absolute',
    bottom: 16,
    right: 16,
  }, addButton : {
    backgroundColor : '#B7F1D4',
    padding: 16,
    borderRadius : 100
  }, flatListContainer : {
    padding: 8
  }, mainDataContainer : {
    margin: 8,
    backgroundColor: '#E6F9D1',
    borderRadius : 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15
  }, noteButton : {
    flex : 1,
    padding: 8,
    margin: 8
  }, noteContainer : {
    maxHeight : 40,
    padding: 10
  }, noteText: {
    textAlign: 'justify',
    color : 'black',
  }, dateText : {
    fontSize : 12
  }, searchBox : {
    flexDirection: 'row',
    borderWidth : 1,
    margin: 8,
    borderRadius : 10,
    flex : 1,
    alignItems : 'center'
  }, searchIcon : {
    padding: 8,
    paddingRight : 0
  }, searchInput : {
    height: 30,
    padding: 8,
    flex : 1
  }, checkBox : {
    paddingRight : 0,
    paddingLeft : 0
  }, editButton : {
    position: 'absolute',
    padding: 16,
    right: 8
  }, deleteButton : {
    backgroundColor: 'red',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }, containerDeleteText : {
    marginLeft : 8,
    color: 'white'
  }, deleteText : {
    color: 'white'
  }, contactText : {
    fontWeight : 'bold',
    fontSize: 16,
    marginBottom: 5
  }
})

export default ContactListScreen