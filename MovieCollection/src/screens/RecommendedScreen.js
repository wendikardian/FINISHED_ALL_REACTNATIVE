import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, {useEffect} from 'react'
import {ShowMovie} from '../components/MovieComponent'

const RecommendedScreen = (props) => {
    const {navigation} = props;
    const {route} = props;
    const sortedRecommended = route.params.allRecommended;
    return (
        <View>
            <FlatList data={sortedRecommended} contentContainerStyle={styles.mainContainer} numColumns={2} key={2} keyExtractor={(item) => item.id} 
            renderItem={({item}) => {
                return(
                    <ShowMovie image={item.imageLink} title={item.title} viewers={item.viewers} isRecommended = {true} rating={item.rating} 
                    onPress={() => navigation.navigate('DetailMovie', {item}) } 
                    />
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 8
    }
})

export default RecommendedScreen