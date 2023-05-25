import React from 'react'
import {View, Text, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Card} from '../components/Card.js'

const SolarSystemScreen = () => {
    return(
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{padding: 16, textAlign: 'center'}}>
                <Text style={{textAlign: 'center', fontFamily: 'serif', fontSize: 30, textDecorationLine: 'underline'}}>SOLAR SYSTEM</Text>
            </View>
            <View  style={{marginBottom : 80}}>
                <ScrollView >
                    <Card tit le='mercury' description='Mercury is the fastest planet, zipping around the sun every 88 earth days' image={require('../../assets/images/mercury.png')} />
                    <Card title='Venus' description='Venus spins slowly in the opposite direction from most planets' image={require('../../assets/images/venus.png')} />
                    <Card title='Earth' description='Earth is the only place we know of so far thats inhabited by living things' image={require('../../assets/images/earth.png')} />
                    <Card title='Mars' description='Mars is a dusty, cold, desert world with a very thin atmosphere' image={require('../../assets/images/mars.png')} />
                    <Card title='Jupiter' description='Jupiter is more than twice as massive than the other planets of our solar system combined' image={require('../../assets/images/jupiter.png')} />
                    <Card title='Saturn' description='Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system' image={require('../../assets/images/saturn.png')} />
                    <Card title='Uranus' description='Uranus rotates at a nearly 90-degree angle from the plane of its orbit' image={require('../../assets/images/uranus.png')} />
                    <Card title='Neptune' description='Neptune is dark, cold, and whipped by supersonic winds' image={require('../../assets/images/neptune.png')} />
                    
                </ScrollView>
            </View> 
            
        </View>
        
    )
}

export default SolarSystemScreen;