import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import { Pikachu } from '../components/Pikachu';

const ThirdScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ScrollView horizontal={true}>
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'green',
            backgroundColor: 'aliceblue',
          }}
          source={require('../../assets/images/pikachu.png')}
        />
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'green',
            backgroundColor: 'aliceblue',
          }}
          source={require('../../assets/images/pikachu.png')}
        />
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'green',
            backgroundColor: 'aliceblue',
          }}
          source={require('../../assets/images/pikachu.png')}
        />
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'green',
            backgroundColor: 'aliceblue',
          }}
          source={require('../../assets/images/pikachu.png')}
        />
      </ScrollView>
    </View>
  );
};

const Challange3 = () => {
  return (
    <View>
      <View style={{alignItems: 'center', margin: 8}}>
        <Text
          style={{
            color: 'blue',
            fontSize: 26,
            textDecorationLine: 'underline',
          }}>
          Pokemon's Profile
        </Text>
      </View>
      <ScrollView>
        <View style={{margin: 8, padding: 8, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderStyle: 'solid',
                borderColor: 'green',
                borderWidth: 4,
                borderRadius: 20,
                backgroundColor: '#CFF4F9',
              }}
              source={require('../../assets/images/pikachu.png')}
            />
            <View style={{marginLeft: 60, justifyContent: 'flex-start'}}>
              <Text>
                Name : Pikachu {'\n'}
                Category : Mouse {'\n'}
                Abilities : Static {'\n'}
                Weakness : Ground
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{margin: 8, padding: 8, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderStyle: 'solid',
                borderColor: 'green',
                borderWidth: 4,
                borderRadius: 20,
                backgroundColor: '#CFF4F9',
              }}
              source={require('../../assets/images/flareon.png')}
            />
            <View style={{marginLeft: 60, justifyContent: 'flex-start'}}>
              <Text>
                Name : Flareon {'\n'}
                Category : Flame {'\n'}
                Abilities : Flash Fire {'\n'}
                Weakness : Ground, Water
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{margin: 8, padding: 8, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderStyle: 'solid',
                borderColor: 'green',
                borderWidth: 4,
                borderRadius: 20,
                backgroundColor: '#CFF4F9',
              }}
              source={require('../../assets/images/rapidash.png')}
            />
            <View style={{marginLeft: 60, justifyContent: 'flex-start'}}>
              <Text>
                Name : Rapidash {'\n'}
                Category : Fire Horse {'\n'}
                Abilities : Run Away, Flash Fin {'\n'}
                Weakness : Water, Ground
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{margin: 8, padding: 8, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderStyle: 'solid',
                borderColor: 'green',
                borderWidth: 4,
                borderRadius: 20,
                backgroundColor: '#CFF4F9',
              }}
              source={require('../../assets/images/pikachu.png')}
            />
            <View style={{marginLeft: 60, justifyContent: 'flex-start'}}>
              <Text>
                Name : Pikachu {'\n'}
                Category : Mouse {'\n'}
                Abilities : Static {'\n'}
                Weakness : Ground
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{margin: 8, padding: 8, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderStyle: 'solid',
                borderColor: 'green',
                borderWidth: 4,
                borderRadius: 20,
                backgroundColor: '#CFF4F9',
              }}
              source={require('../../assets/images/pikachu.png')}
            />
            <View style={{marginLeft: 60, justifyContent: 'flex-start'}}>
              <Text>
                Name : Pikachu {'\n'}
                Category : Mouse {'\n'}
                Abilities : Static {'\n'}
                Weakness : Ground
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const ThirdScreen16C = () => {
  return (
    <View
      style={{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ScrollView>
        <Pikachu sourceImage={require('../../assets/images/pikachu.png')} name="pikachu" />
        <Pikachu sourceImage={require('../../assets/images/flareon.png')} name="Flereon" />
        <Pikachu sourceImage={require('../../assets/images/rapidash.png')} name="Rapidash" />
        <Pikachu sourceImage={require('../../assets/images/rapidash.png')} name="Hello" />
      </ScrollView>
    </View>
  );
};

export default ThirdScreen16C;
