import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const Ketiga = () => {
  return (
    <View style={{ backgroundColor : 'lavender', flex: 1, flexDirection : 'row'}}>
      <ScrollView>
      <View style={{backgroundColor : 'lime',height: 400 ,flexDirection : 'row', alignItems: 'center', }}>
          <Image style={{width: 150, borderRadius: 30}} source={require('../../assets/images/profilePicture1.png')} /> 
          <Text style={{fontSize: 32, fontWeight: 'bold'}}>Thor Ragnarog</Text>
      </View>
      <View style={{backgroundColor : 'cyan',height: 400, flexDirection: 'row'}}>
        <Image style={{width: 200, height: 200}} source={{uri:'https://static.republika.co.id/uploads/images/inpicture_slide/film-frozen-2-_191120152636-535.jpg'}} />
        <Text style={{fontSize: 32, fontWeight: 'bold'}}>Frozen</Text>
      </View>
      <View style={{backgroundColor : 'magenta', height: 400}}>
        <Text style={{fontSize: 32, fontWeight: 'bold'}}>Inside Out</Text>
      </View>
      </ScrollView>
    </View>

  )
}


const addImage =( ) => {
  return(
    <View>
      <Image style={{width: 150, borderRadius: 30}} source={require('../../assets/images/profilePicture1.png')} /> 
       <Image style={{width: 300, height: 300}} source={{uri:'https://i.pinimg.com/736x/e4/28/c5/e428c5f6e045bcf567fa4267f7985076.jpg'}} />
    </View>
  ) 
}

export default Ketiga