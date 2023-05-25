import React, {useState, useEffect}from 'react';
import {countryList, objectNameList, objectImageList } from '../../data/Data.js'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';


const GuessTheCountryScreen = (props) => {
    const {navigation} = props
    const [answer, setAnswer] = useState('')
    const [index, setIndex] = useState()
    const [result, setResult] = useState('')
    const [score, setScore] = useState(0)
    const [life, setLife] = useState(3)
    
    const randomIndex = () => {
        const pickRandomIndex = Math.floor(Math.random() * countryList.length)
        setIndex(pickRandomIndex)
    }

    const checkAnswer = () => {
        if (answer === countryList[index]) {
            setResult('true')
            setScore(score + 10);
        }else{
            setResult('false')
            setLife(life - 1)
        }

        setTimeout(() => {
            setResult('')
            setAnswer('')
            randomIndex()
        }, 1500)
    }

    
    useEffect( () => {
        if(score == 50){
            navigation.navigate('Win')
        }
    }, [score])

    useEffect( () => {
        if(life < 1){
            navigation.navigate('GameOver')
        }
    }, [life])

    // useEffect(() => {
    //     if(score == 50) {
    //         navigation.navigate('Win')
    //     }else if (life < 1){
    //         navigation.navigate('GameOver')
    //     }
    // }, [score, life])

    useEffect(() => {
        const homePage = navigation.addListener('focus', () => {
            randomIndex()
            setScore(0)
            setLife(3)
        })
        return homePage
    }, [])

    
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{textDecoration: 'underline', fontSize: 28, fontFamily: 'serif', marginBottom: 16}}>
                    Guess The Country
                </Text>
                <Image style={{width: 250, height: 250, borderRadius: 10}} source={{uri: objectImageList[index]}}  /> 
                <View style={{margin: 8, backgroundColor: 'lavender', padding: 4, borderWidth: 1}}>
                    <Text style={{fontSize: 18}} >{objectNameList[index]}</Text>
                </View>
                <View style={{flexDirection: 'row', margin: 8}}>
                    <TextInput style={{borderWidth:1, width: '50%'}} placeholder="Write Your Answer" keyboardType='default' onChangeText = {(text) => setAnswer(text)} value={answer} />
                    <TouchableOpacity style={{
                        borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 8, marginLeft: 8, marginBottom: 8, marginTop: 8, borderColor: 'skyblue'
                    }} onPress={() => checkAnswer()}>
                        <Text style={{fontSize: 18}}>Submit</Text>
                    </TouchableOpacity>
                </View>
                {/* <Text>{countryList[index]}</Text> */}
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>{result}</Text>
                <View style={{justifyContent: 'center', alignItems: 'center', padding: 16, flexDirection: 'row', }}>
                    <View style={{borderWidth: 1, padding: 8, alignItems: 'center', backgroundColor: 'mistyrose', borderRadius: 20, marginRight: 15, flex: 1}}>
                        <Text>Score : {score}</Text>
                    </View>
                    <View style={{borderWidth: 1, padding: 8, alignItems: 'center', backgroundColor: 'mistyrose', borderRadius: 20, flex: 1}}>
                        <Text>Life : {life}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        
    )
}

export default GuessTheCountryScreen