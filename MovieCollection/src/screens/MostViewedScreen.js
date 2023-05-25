import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {ShowMovie} from '../components/MovieComponent';

const MostViewedScreen = props => {
  const {navigation} = props;
  const {route} = props;
  const sortedMostViewed = route.params.allMostViewed;
  useEffect(() => {

    console.log(sortedMostViewed.length);
  }, []);
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.mainDataContainer}
        data={sortedMostViewed}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <ShowMovie
              image={item.imageLink}
              title={item.title}
              viewers={item.viewers}
              isHome={false}
              onPress={() => navigation.navigate('DetailMovie', {item})}
            />
          );
        }}
        numColumns={2}
        key={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainDataContainer: {
    padding: 8,
  },
  movieContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: 'skyblue',
  },
  movieImage: {
    width: 130,
    height: 200,
  },
});

export default MostViewedScreen;
