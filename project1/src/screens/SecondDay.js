import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SecondDay = () => {
  const pressed = () => {
    alert('You clicked the button');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
      }}>
      <View
        style={{
          backgroundColor: 'lavender',
          padding: 20,
          borderRadius: 20,
          borderWidth: 4,
          borderColor: 'red',
          borderStyle: 'dotted',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', marginBottom: 20, color: 'orange'}}>
          Mobile Legends
        </Text>
        <Text style={{textAlign: 'justify'}}>
          Mobile Legends: Bang Bang adalah game arena pertempuran online
          multipemain seluler yang dikembangkan dan diterbitkan oleh Moonton,
          anak perusahaan ByteDance
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            padding: 10,
            margin: 15,
            borderRadius: 20,
          }}
          onPress={pressed}>
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SecondDay;
