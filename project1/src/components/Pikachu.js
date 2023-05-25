import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

export const Pikachu = (props) => {
    const {sourceImage, name} = props;
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        height: 500,
      }}>
      <ScrollView horizontal>
        <Image
          style={{width: 100, height: 100}}
          source={sourceImage}
        />
        <View>
          <Text style={{fontSize: 40}}>{name}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
