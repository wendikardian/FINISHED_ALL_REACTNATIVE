import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

export const Card = (props) => {
    const {name, imageLink, category} = props
  return (
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
            source={imageLink}
          />
          <View style={{marginLeft: 60, justifyContent: 'flex-start'}}>
            <Text>
              Name : {name} {'\n'}
              Category : {category} {'\n'}
            </Text>
          </View>
        </ScrollView>
      </View>
  )
}

