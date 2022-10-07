import React, {useEffect, useState} from 'react'
import {View, Image, Dimensions, StyleSheet, Text} from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom'
import realm from '../../store/realm'

const ImageZoomScreen = (props) => {
    const {route} = props

    const imagePath = route.params.imagePath
    const [urlImg, setUrlImg] = useState('')
    
    return(
        <View style={styles.mainContainer}>
            <ImageZoom
                cropWidth={Dimensions.get('window').width}
                cropHeight={Dimensions.get('window').height}
                imageWidth={Dimensions.get('window').width}
                imageHeight={Dimensions.get('window').width}
            >
            <Image style={styles.image} source={{uri: imagePath}} />
            </ImageZoom>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
        flex: 1,
        backgroundColor : 'black'
    }, image : {
        width: '100%',
        height: '100%'
    }
})

export default ImageZoomScreen