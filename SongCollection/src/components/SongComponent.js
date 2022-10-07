import React from 'react';
import {useEffect} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';
import {ButtonComponent} from './ButtonComponent'

export const showSong = (props) => {
    const {imageLink, title, rating, isRecommended} = props;
    return(
        <View style={[styles.horizontalDataContainer, {flex:isHome ? null : 1}]}>
            <Image style={styles.songImage} source={{uri: imageLink}} />
            <View style={styles.horizontalTitleContainer}>
                <Text styles={styles.horizontalTitle}>
                    {title}
                </Text>
            </View>
            {
                isRecommended ? <View>
                    
                    {
                    rating === 5 ? <Image style={styles.ratingImage} source={require('../../assets/images/five-stars.png')} /> :
                    rating === 4 ? <Image style={styles.ratingImage} source={require('../../assets/images/four-stars.png')} /> :
                    rating === 3 ? <Image style={styles.ratingImage} source={require('../../assets/images/three-stars.png')} /> :
                    rating === 2 ? <Image style={styles.ratingImage} source={require('../../assets/images/two-stars.png')} /> :
                    rating === 1 ? <Image style={styles.ratingImage} source={require('../../assets/images/star.png')} /> : null
                    }
                </View>
            :<View style={styles.viewersContainer}>
                    <View style={styles.viewersText}>
                        <Text>{numberWithCommas(viewers)}</Text>
                    </View>
                </View>
            }
             
                     <ButtonComponent {...props} />
                
        </View>
    )
}

export const SongExplanation = (props) => {
    const {name, value, isRating} = props;

    useEffect(()=> {console.log(props)}, [])
    return(
        <View style={styles.mainContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.generalFontSize}>{name}</Text>
            </View>
            <Text style={styles.generalFontSize}> : </Text>
            <View style={styles.valueContainer}>
                {
                    isRating ? 
                        value === 5 ?
                        <Image style={styles.ratingImage} source={require('../../assets/images/five-stars.png')} />
                        :value === 4 ?
                        <Image style={styles.ratingImage} source={require('../../assets/images/four-stars.png')} />
                        :value === 3 ?
                        <Image style={styles.ratingImage} source={require('../../assets/images/three-stars.png')} />
                        :value === 2 ?
                        <Image style={styles.ratingImage} source={require('../../assets/images/two-stars.png')} />
                        :<Image style={styles.ratingImage} source={require('../../assets/images/star.png')} />
                    :<Text style={styles.textValue}>{value}</Text>
                }
               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    horizontalDataContainer : {
        margin: 8,
        width: 180,
        alignItems : 'center',
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
        padding: 16
    },
    horizontalTitleContainer : {
        marginTop: 8,
        marginBottom: 8
    },
    horizontalTitle : {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    songImage : {
        width: 130,
        height: 200,
        borderRadius: 10
    },
    viewersContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewersText : {
        marginLeft : 8
    },
    mainContainer : {
        flexDirection: 'row',
        margin: 8
    },
    nameContainer : {
        flex : 1
    },
    generalFontSize : {
        fontSize: 16
    },
    valueContainer : {
        flex : 2
    },
    textValue : {
        textAlign: 'justify',
        fontSize: 16
    }, ratingImage : {
        width : 100,
        height : 20
    }
})