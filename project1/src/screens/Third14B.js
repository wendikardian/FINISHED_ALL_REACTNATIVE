import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

const Third14B = () => {
  return (
    <View
      style={{
        backgroundColor: 'cyan',
        flex: 1,
        flexDirection: 'column',
      }}>
        <ScrollView>
      <View style={{backgroundColor: 'yellow',  height: 300}}>
        <Text>Pikachu</Text>
        <Image
          style={{width: 100, height: 100}}
          source={require('../../assets/images/pikachu.png')}
        />
      </View>
      <View style={{backgroundColor: 'red', height: 300, flexDirection:'row'}}>
      <ScrollView horizontal >
            
        <Text>Flareon</Text>
        <Image
          style={{width: 600, height: 600}}
          source={{uri : 'https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png'}}
          />
         
          </ScrollView>
      </View>
      <View style={{backgroundColor: 'skyblue', height: 300}}>
        <Text>Third14B</Text>
        <Image
          style={{width: 600, height: 600}}
          source={{uri : 'https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png'}}
        />
      </View>
      </ScrollView>
    </View>
  );
};

export default Third14B;
