import React from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native'


const GameOverScreen = (props) => {
    const {navigation} = props;
    return(
        <View style={{flex: 1}}>
            <ImageBackground source={{uri : 'https://wallpaperaccess.com/full/3147153.jpg'}} imageStyle={{opacity: 0.5}} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../../assets/images/game-over.png')} style={{width: '50%', height: 180}} />
                <View style={{borderWidth: 1, backgroundColor: 'lime', padding: 8, borderRadius: 10, marginTop: 32}}>
                    <TouchableOpacity onPress = {() => navigation.navigate('Home')}>
                        <Text style={{textTransform: 'uppercase', fontSize: 24, fontWeight: 'bold'}}>Play Again</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default GameOverScreen;