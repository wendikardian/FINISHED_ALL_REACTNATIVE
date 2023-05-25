import React from "react"
import {View, Text, Image, TouchableOpacity} from "react-native"
import {Icon} from "react-native-elements"

export const Card = (props) => {
    const {image, title, description} = props;
    const planetTouched = (title) => {
        alert(`you touched ${title}`)
    }
    return(
        
            <TouchableOpacity style={{color: 'red'}} onPress={ () => {planetTouched(title)}}>
                <View style={{flexDirection: 'row', backgroundColor: 'wheat', margin: 16, padding: 16, borderRadius: 20, borderColor: 'green', borderWidth: 1}}>
                    <Image source={image} style={{width: 100, height: 100}} />
                    <View style={{flex: 1, marginLeft: 8, marginRight: 8, justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
                        <Text >{description}</Text>
                    </View>
                </View>
                    </TouchableOpacity>
                 
    )
}