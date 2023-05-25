import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {movieData} from '../../data/MovieData.js';
import {ShowMovie} from '../components/MovieComponent';
import {ButtonComponent} from '../components/ButtonComponent';

const HomeScreen = props => {
  const {navigation} = props;
  const [recommended, setRecommended] = useState([]);
  const [mostViewed, setMostViewed] = useState([]);
  const [allMostViewed, setAllMostViewed] = useState([]);
  const [allRecommended, setAllRecommended] = useState([]);
  
  const compareRating = (a, b) => {
    const ratingA = a.rating;
    const ratingB = b.rating;
    if (ratingA > ratingB) {
      return -1;
    } else if (ratingA < ratingB) {
      return 1;
    } else {
      return 0;
    }
  };

  const compareViewers = (a, b) => {
    const viewersA = a.viewers;
    const viewersB = b.viewers;
    if (viewersA > viewersB) {
      return -1;
    } else if (viewersA > viewersB) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const threeRecommended = [];
    const threeViewed = [];
    const sortedRecommended = [...movieData].sort(compareRating);
    const sortedMostViewed = [...movieData].sort(compareViewers);
    setAllMostViewed(sortedMostViewed);
    setAllRecommended(sortedRecommended);
    for (let i = 0; i < 3; i++) {
      threeRecommended.push(sortedRecommended[i]);
      threeViewed.push(sortedMostViewed[i]);
    }
    setRecommended(threeRecommended);
    setMostViewed(threeViewed);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={recommended}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({item}) => {
          return (
            <View style={[styles.dataContainer, {marginTop: 20}]}>
              <Image style={styles.movieImage} source={{uri: item.imageLink}} />
              <View style={styles.movieDescriptionContainer}>
                <View style={{flexDirection: 'row'}}>
                  <Icon 
                    name="title"
                    type="material"
                    style={{marginRight: 15}}
                  />
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={([styles.yearContainer], {flexDirection: 'row'})}>
                  <Icon
                    name="calendar"
                    type="antdesign"
                    style={{marginRight: 15}}
                  />
                  <Text>{item.year}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Icon
                    name="star-rate"
                    type="material"
                    style={{marginRight: 15}}
                  />
                  {item.rating === 5 ? (
                    <Image
                      style={styles.ratingImage}
                      source={require('../../assets/images/five-stars.png')}
                    />
                  ) : item.rating === 4 ? (
                    <Image
                      style={styles.ratingImage}
                      source={require('../../assets/images/four-stars.png')}
                    />     
                  ) : item.rating === 3 ? (
                    <Image
                      style={styles.ratingImage}
                      source={require('../../assets/images/three-stars.png')}
                    />
                  ) : item.rating === 2 ? (
                    <Image
                      style={styles.ratingImage}
                      source={require('../../assets/images/two-stars.png')}
                    />
                  ) : item.rating === 1 ? (
                    <Image
                      style={styles.ratingImage}
                      source={require('../../assets/images/star.png')}
                    />
                  ) : null}
                </View>
                <ButtonComponent
                  onPress={() => {
                    navigation.navigate('DetailMovie', {item});
                  }}
                />
              </View>
            </View>
          );
        }}
        ListHeaderComponent={
          <View>
            <View style={[styles.mainCategoryContainer]}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Most Viewed</Text>
                <Text style={styles.seeAllContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('MostViewedScreen', {allMostViewed})
                    }>
                    <Text style={styles.seeAllText}>See All</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
            <FlatList
              horizontal
              data={mostViewed}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <ShowMovie
                    image={item.imageLink}
                    title={item.title}
                    viewers={item.viewers}
                    isHome={true}
                  />
                );
              }}
              contentContainerStyle={{
                flex: mostViewed.length === 0 ? 1 : 0,
              }}
              ListEmptyComponent={
                <View style={{alignItems: 'center', flex: 1}}>
                  <Text>No Items in this category</Text>
                </View>
              }
            />
            <View
              styles={[
                styles.mainCategoryContainer,
                {flexDirection: 'row', marginBottom: 40},
              ]}>
              <View style={styles.categoryContainer}>
                <Text style={[styles.categoryText]}>Recommended</Text>
              </View>
              <View
                style={[
                  styles.seeAllContainer,
                  {
                    alignItems: 'flex-end',
                    flex: 1,
                    justifyContent: 'center',
                    marginTop: -20,
                    marginRight: 10,
                  },
                ]}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('RecommendedScreen', {allRecommended})
                  }>
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={{alignItems: 'center'}}>
            <Text>No Items in this category</Text>
          </View>
        }
        // ListFooterComponent = {
        //     <Text>
        // An array of objects lets you store multiple values  in a single variable. It stores a fixed-size sequential  collection of elements of the same type. An array is  used to store a collection of data,but it is often more useful to think of an array as a collection of variables of the same type.
        // </Text>
        // }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flatListContainer: {
    padding: 8,
  },
  movieImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  dataContainer: {
    flexDirection: 'row',
    margin: 8,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#96ceb4',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieDescriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 8,
  },
  yearContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  mainCategoryContainer: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ratingImage: {
    width: 100,
    height: 20,
  },
  seeAllText: {
    color: '#009688',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
