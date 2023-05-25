import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
// import {userData} from '../../data/TryCodeData.js';
import {userData} from '../../data/TryCodeData';

const TryCodeScreen = () => {
  const [score, setScore] = useState(60);
  useEffect(() => {
    // if (score >= 80) {
    //   console.log('You are a genius');
    // } else if (score >= 60) {
    //   console.log('You are a good person');
    // } else {
    //   console.log('You are a normal person');
    // }

    // score >= 80 ? console.log('You are a genius') : console.log('You are a normal person');

    score >= 80
      ? score >= 90
        ? console.log('You are a genius')
        : console.log('You are a good person')
      : score >= 60
      ? console.log('Good')
      : score >= 40
      ? console.log('Normal')
      : console.log('Bad');
  }, []);
  return (
    <View style={{flex: 1}}>
      {/* <Text>
                    An array of objects lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.
                    </Text> */}
      {/* <FlatList contentContainerStyle={{padding: 8}} data={userData} keyExtractor={(item) => item.id} 
                        renderItem ={ ({item}) => {
                            return(
                                <View style={[styles.containerAnItem,
                                        {backgroundColor : item.gender.toLowerCase() === `male` ? 'moccasin' : 'lavender'}
                                ]}>
                                    <Image source={{uri: item.imageLink}} style={styles.imgStyleItem} />
                                    <Text>{item.name}</Text>
                                    <Text>{item.gender}</Text>
                                    <Text>{item.age}</Text>
                                    {
                                        item.age >= 6 && item.age <= 12 ? <Text>Child</Text> 
                                        : item.age >=13 && item.age <= 18 ? <Text>Teen</Text> 
                                        : item.age >= 18 && item.age <= 64 ? <Text>Adult</Text> :null
                                    }
                                </View>
                            )
                        }}
                    /> */}

      {/* <FlatList
        data={userData}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: 8}}
        ListHeaderComponent={
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'yellow',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>List of Name</Text>
          </View>
        }
        renderItem={({item}) => {
          return (
            <View
              style={[
                styles.containerAnItem,
                {
                  borderRadius: 20,
                },
              ]}>
              <Image
                source={{uri: item.imageLink}}
                style={styles.imgStyleItem}
              />
              <Text style={styles.imageDesc}>{item.name}</Text>
              {
              item.gender === 'Male' ? (
                <Text style={{backgroundColor: 'skyblue'}}>
                  My gender is male
                </Text>
              ) : item.gender === 'Female' ? (
                <Text style={{backgroundColor: 'pink'}}>
                  My gender is female
                </Text>
              ) : (
                <Text style={{backgroundColor: 'red'}}>Don't Know</Text>
              )}
            </View>
          );
        }}
        ListFooterComponent={
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'yellow',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>
              @ Wendi Kardian - 2023
            </Text>
          </View>
        }
      /> */}
      <FlatList
        contentContainerStyle={{padding: 8}}
        data={userData}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View
            // add style with lavelder background
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'lavender',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>THIS IS MY FRIEND</Text>
          </View>
        }
        ListFooterComponent={
          // add footer with copyright and yellow backgroudn
          <View style={{width: '100%', height: 50, backgroundColor: 'yellow'}}>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>
              @ Wendi Kardian - 2023
            </Text>
          </View>
        }
        renderItem={({item}) => {
          return (
            <View style={[styles.mainContainer, {
                backgroundColor : item.gender == 'Male' ? 'skyblue' : 'pink'
            }]}>
              <Text style={styles.textStyle}>Name : {item.name}</Text>
              <Text style={styles.textStyle}>Age : {item.age}</Text>
              <Text>Gender : {item.gender}</Text>
              <Image
                source={{uri: item.imageLink}}
                style={styles.imgStyleItem}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyleItem: {
    width: 100,
    height: 100,
  },
  mainContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'purple',
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default TryCodeScreen;
