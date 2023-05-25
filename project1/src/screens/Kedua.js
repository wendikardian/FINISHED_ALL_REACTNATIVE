import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

const Kedua = () => {
  const sayHello = () => {
    alert('HELLLO');
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lavender',
      }}>
      <View
        style={{
          backgroundColor: 'skyblue',
          padding: 20,
          borderRadius: 30,
          borderWidth: 3,
          borderStyle: 'dashed',
          borderColor: 'blue',
        }}>
        <Text
          style={{textAlign: 'center', fontWeight: 'bold', marginBottom: 15}}>
          Mobile Legends
        </Text>
        <Text>
          Mobile Legends adalah permainan seluler terbitan Moonton berbasis MOBA
          yang dimainkan secara daring. Mobile Legends. Pengembang, Moonton.
          Penerbit, Moonton.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#1DEC42',
            width: 70,
            padding: 5,
            borderRadius: 20,
            marginTop: 20,
          }}
          onPress={() => sayHello()}>
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'purple',
          padding: 20,
          borderRadius: 30,
          borderWidth: 3,
          borderStyle: 'dashed',
          borderColor: 'orange',
          marginTop: 30,
        }}>
        <Text style={{color: 'white'}}>PUBG Mobile</Text>
      </View>
    </View>
  );
};

const Second16C = () => {
  const openAlert = () => {
    alert("You clicked the button")
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lavender',
      }}>
      <View
        style={{
          backgroundColor: 'skyblue',
          padding: 20,
          borderRadius: 30,
          margin: 30,
          borderWidth: 3,
          borderStyle: 'dashed',
          borderColor: 'blue',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'red',
            fontStyle: 'italic',
          }}>
          Mobile Legends
        </Text>
        <Text
          style={{
            marginTop: 20,
            textAlign: 'justify',
          }}>
          Kamu tidak perlu bingung mengenai properti flex. Hal tersebut akan
          dipelajari di pertemuan lain ya!
        </Text>
        {/* <Button title="hello" style={{backgroundColor : 'red'}} />
         */}
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            width: 100,
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
            borderWidth: 2,
          }}
          onPress={openAlert}>
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>PUBG Mobile</Text>
      </View>
    </View>
  );
};

export default Second16C;
