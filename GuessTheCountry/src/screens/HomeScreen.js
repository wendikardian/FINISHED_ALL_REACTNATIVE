import React,  { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HomeScreen = () => {
  const [age, setAge] = useState(13);
  const [number, setNumber] = useState(0);
  const [phone, setPhone] = useState(123);
  const [name, setName] = useState("Wendi")
  // const [data, setData] = useState({
  //   name : '',
  //   class : '',
  // })

  const decreaseNumber = () => {
    setNumber(number - 1);
    setName("Dikurangi")
  };
  
  const increaseNumber = () => {
    setNumber(number + 1);
    setName("Ditambah")
  };

  // useEffect(() => {
  //   setNumber(100)
  //   setName("Kelvin")
  // }, [])

  useEffect(() => {
    setNumber(200)
    setName("Louis")
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View
        style={{
          margin: 8,
          padding: 8,
          borderWidth: 1,
        }}>
        <TouchableOpacity onPress={() => decreaseNumber()}>
          <Text style={{fontSize: 50}}> - </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          margin: 8,
          padding: 8,
        }}>
        <Text style={{fontSize: 50}}>{number}</Text>
        <Text>{name}</Text>
      </View>
      <View
        style={{
          margin: 8,
          padding: 8,
          borderWidth: 1,
        }}>
        <TouchableOpacity onPress={() => increaseNumber()}>
          <Text style={{fontSize: 50}}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
