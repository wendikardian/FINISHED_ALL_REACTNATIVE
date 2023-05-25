import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import { Card } from '../components/Card';

const DayFour = () => {
  return (
    <View style={{flex : 1}}>
        <Card name="Pikachu" imageLink={require('../../assets/images/pikachu.png')} category="Mouse"  />
        <Card name="Flareon" imageLink={require('../../assets/images/flareon.png')}  category="Cat" />
        <Card name="Rapidash" imageLink={require('../../assets/images/rapidash.png')} category="Kuda"   />
    </View>
  );
};

export default DayFour;
