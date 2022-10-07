import { View, Text, StyleSheet } from 'react-native'
import {HeaderComponent, MainComponent} from '../components/NoteComponent'
import React, {useEffect, useState} from 'react'
import realm from '../../store/realm'

const EditNoteScreen = (props) => {
    const {route, navigation} = props;
    const id = route.params.id
    const [dataToUpdate, setDataToUpdate] = useState([])
    const [newNote, setNewNote] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    useEffect(()=> {
        const data = realm.objects('Note').filtered(`id = ${id}`)
        setDataToUpdate(data)
    }, [])
    useEffect(() => {
        console.log("Edit Screen")
        console.log(dataToUpdate)
    }, [dataToUpdate])
    const dateFormat = (date) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const noteDate = new Date(date)
        const dateOnly = noteDate.getDate()
        const monthOnly = noteDate.getMonth()
        const yearOnly = noteDate.getFullYear()
        return months[monthOnly] + ` ` + dateOnly + ', ' + yearOnly
      }
      
    const editNote = (value, editStatus) => {
        setNewNote(value)
        setIsEdit(editStatus)
    }

    const saveNote = (value) => {
        if(value === ''){
            alert('Note cannot be empty!')
        }else{
            const allData = realm.objects('Note')
            allData.forEach((item) => {
                if(item.id === id && item.note !== value){
                    realm.write(() => {
                        item.note = value;
                        item.date = new Date().toISOString();
                    })
                    navigation.navigate("NoteList")
                }else if(item.id === id && item.note === value){
                    alert("Nothing Changed")
                }
            })
        }
    }

  return (
    <View style={styles.mainContainer}>
        <HeaderComponent title="Edit"
        onPress={() => saveNote(
            isEdit ? newNote : dataToUpdate[0].note
        )}
        />
        {
            dataToUpdate.length !== 0 ? 
            <MainComponent date={dateFormat(dataToUpdate[0].date)}
            value={isEdit ? newNote : dataToUpdate[0].note}
            onChangeText={(text) => editNote(text, true)} />  :
            null
        }
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
    }, 
})

export default EditNoteScreen