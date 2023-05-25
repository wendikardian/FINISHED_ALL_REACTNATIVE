import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import {useEffect} from 'react'
import {MovieExplanation} from '../components/MovieComponent'

const DetailMovieScreen = (props) => {
    // const {navigation} = props
    const {route} = props;
    const movie = route.params.item;
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

    useEffect(() => {
        console.log(movie)
    }, [])
    
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.movieContainer}>
                    <View style={styles.middle}>
                        <Image style={styles.image} source={{uri: movie.imageLink}} />
                    </View>
                    <View style={styles.titleContainer}>
                            <Text style={styles.title}> {movie.title} </Text>
                    </View>
                    <MovieExplanation name="Release Year" value={movie.year} />
                    <MovieExplanation name="Staring          " value={movie.starring} />
                    <MovieExplanation name="Description  " value={movie.description} />
                    <MovieExplanation name="Viewers        " value={numberWithCommas(movie.viewers)} />
                    <MovieExplanation name="Rating           " isRating={true} value={movie.rating} />
                    
                </View>
            </ScrollView>
        </View>
  )
}


const styles = StyleSheet.create({
    mainContainer : {
        flex : 1
    },
    movieContainer : {
        margin: 8,
        padding: 8
    },
    middle : {
        alignItems : 'center'
    },
    image : {
        width: 200,
        height: 300,
        borderRadius : 10,
        borderWidth: 3,
        borderColor: '#ffbe7bff'
    },titleContainer : {
        marginTop: 8,
        marginBottom: 8,
        alignItems : 'center',
        justifyContent : 'center'
    }, 
    title: {
        fontSize: 28,
        padding: 8,
        fontWeight: 'bold',
        backgroundColor: 'salmon',
        borderRadius : 10,
        color: 'white'
    }
})

export default DetailMovieScreen