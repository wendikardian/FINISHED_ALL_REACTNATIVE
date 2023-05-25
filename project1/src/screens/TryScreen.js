import React from 'react';
import {View, Text, Button} from 'react-native';

const TryScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{backgroundColor: 'lavender', padding: 30, borderRadius: 30}}>
        <Text style={{color: 'red', fontSize: 20}}>TryScreen</Text>
      </View>
      <View style={{backgroundColor: 'skyblue', padding: 30, margin: 20, borderRadius: 30}}>
        <Text style={{color: 'blue', fontSize: 20}}>TryScreen 2</Text>
      </View>
        <Button title="click me" />
    </View>
  );
};

export default TryScreen;
