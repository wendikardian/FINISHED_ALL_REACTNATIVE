import React from 'react'
import {View, Text, ScrollView} from 'react-native'
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Feed, Story} from '../components/InstagramComponent.js'
// import {useFonts} from 'expo-font'

const InstagramHomeScreen = () => {
    // const [loaded] = useFonts({
    //     Montserrat: require('../../assets/fonts/StyleScript-Regular.ttf'),
    //   });
    return(
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontFamily: 'StyleScript-Regular', fontSize: 40, marginLeft: 16}}>Instagram</Text>
                <View style={{margin: 8}}>
                    <Icon name='plus-square-o' type='font-awesome' size={26} />
                </View>
            </View>
            <ScrollView >
                <View style={{flexDirection: 'row', margin: 8}}>
                    <ScrollView horizontal>
                        <Story profile={require('../../assets/images/profilePicture1.png')} username='Wendi' />
                        <Story profile={require('../../assets/images/profilePicture2.png')} username='Jhoni' />
                        <Story profile={require('../../assets/images/profilePicture3.png')} username='Taylah' />
                        <Story profile={require('../../assets/images/profilePicture4.png')} username='Blondie' />
                        <Story profile={require('../../assets/images/profilePicture5.png')} username='Unknown' />
                    </ScrollView>
                </View>
                <Feed username="Wendi" imgUri={require('../../assets/images/profilePicture1.png')} post={{uri:'https://wallpaperaccess.com/full/201215.jpg'}}/>
                <Feed username="Taylucifer" imgUri={require('../../assets/images/profilePicture2.png')} post={{uri:'https://images4.alphacoders.com/292/292026.jpg'}}/>
                <Feed username="Blondie" imgUri={require('../../assets/images/profilePicture3.png')} post={{uri:'https://wallpaperaccess.com/full/496881.jpg'}}/>
                <Feed username="AFadGuy" imgUri={require('../../assets/images/profilePicture4.png')} post={{uri:'https://images5.alphacoders.com/316/316297.jpg'}}/>
                <Feed username="Fu9l1S1ut" imgUri={require('../../assets/images/profilePicture5.png')} post={{uri:'https://wallpaperaccess.com/full/1403923.jpg'}}/>
                
            </ScrollView>
        </View>
    )
}

export default InstagramHomeScreen