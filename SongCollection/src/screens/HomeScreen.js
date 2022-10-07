import React from 'react';
import {useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import {songData} from '../../data/SongData.js'
import {showSong} from '../components/SongComponent'
import {ButtonComponent} from '../components/ButtonComponent'

const HomeScreen = (props) => {
    const {navigation} = props;
    const [recommended, setRecommended] = useState([])
    const compareRating = (a,b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;
        if(ratingA > ratingB){
            return -1;
        }else if(ratingA < ratingB){
            return 1;
        }else{
            return 0;
        }
    }

    useEffect(() => {
        const sortedRecommended = [...songData].sort(compareRating);
        setRecommended(sortedRecommended)
    }, [])

    return(
        <View style={styles.mainContainer}>
            <FlatList data={recommended} keyExtractor = {(item) => item.id} contentContainerStyle={styles.flatListContainer} renderItem = {({item}) => {
                return(
                    <View style={[styles.dataContainer, {marginTop : 20}]}>
                        <Image style={styles.songImage} source={{uri : item.imageLink}} />
                        <View style={styles.songDescriptionContainer}>
                            <View style={{flexDirection : 'row'}}>
                                
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                            <View style={[styles.yearContainer], {flexDirection : 'row'}}>
                            <Text >{item.singer}</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 5}}>
                                
                            {
                                item.rating === 5 ?
                                <Image style={styles.ratingImage} source={require('../../assets/images/five-stars.png')} /> :
                                item.rating === 4 ?
                                <Image style={styles.ratingImage} source={require('../../assets/images/four-stars.png')} /> :
                                item.rating === 3 ?
                                <Image style={styles.ratingImage} source={require('../../assets/images/three-stars.png')} /> :
                                item.rating === 2 ?
                                <Image style={styles.ratingImage} source={require('../../assets/images/two-stars.png')} /> :
                                item.rating === 1 ?
                                <Image style={styles.ratingImage} source={require('../../assets/images/star.png')} /> : null
                            }
                            </View>
                            <ButtonComponent onPress={() => {
                                navigation.navigate('Detail', {item})
                            }} />
                        </View>
                    </View>
                )
            }} 
            ListEmptyComponent = {
                <View style={{alignItems: 'center'}}>
                    <Text>
                        No Items in this category
                    </Text>
                </View>
            }
            />
            
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer : {
        flex :1
    },
    flatListContainer : {
        padding: 8
    },
    songImage : {
        width: 120,
        height: 120,
    },
    dataContainer : {
        flexDirection: 'row',
        margin: 8,
        borderWidth : 2,
        borderColor: "#A6A6BD",
        padding: 5,
    },
    title : {
        fontSize : 18,
        fontWeight : 'bold'
    },
    songDescriptionContainer: {
        flex : 1,
        justifyContent : 'center',
        margin: 4
    },
    yearContainer : {
        marginTop : 8,
        marginBottom: 8
    },
    mainCategoryContainer : {
        marginTop : 8,
        marginLeft : 8,
        marginRight : 8,
        flex: 1,
        flexDirection: 'row',
        justifyContent : 'space-between',
    },
    categoryContainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent : 'space-between'
    },
    categoryText : {
        fontSize : 20,
        fontWeight : 'bold'
    },
    ratingImage : {
        width : 100,
        height : 20
    },seeAllText : {
        color : '#009688',
        textDecorationLine : 'underline'
    }
})

export default HomeScreen