import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SecondScreen = () => {
    const openAlert = () => {
        alert("You chose ML")
    }
    const PUBGAlert = () => {
        alert("You Chose PUBG")
    }
    return(
        <View style={{
            flex: 1,
            backgroundColor: 'lavender',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{
                backgroundColor: 'skyblue',
                margin: 20,
                padding: 20,
                borderWidth: 4,
                borderStyle: 'dashed',
                borderColor: 'purple',
                borderRadius: 20
            }}>
                <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Mobile Legends</Text>
                <Text><Text style={{color: 'purple'}}>Mobile Legends</Text> is a multiplayer online battle arena (MOBA) game. The two
opposing teams fight to reach and destroy the enemy’s base while defending
their own base for control of a path.</Text>
            </View>
            <View>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    padding: 8,
                    margin: 8,
                    borderRadius: 50,
                    borderWidth: 2}} onPress={() => {openAlert()}}>
                        <Text style={{color: 'lightcoral'}}>
                            Mobile Legend Button
                        </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: 'cornflowerblue',
                margin: 20,
                padding: 20,
                borderWidth: 4,
                borderStyle: 'dashed',
                borderColor: 'purple',
                borderRadius: 20
            }}>
                <Text style={{fontWeight : 'bold', textAlign:'center'}}>PUBG</Text>
                <Text><Text style={{color: 'purple'}}>PlayerUnknown's Battlegrounds</Text>, better known as PUBG, is a multiplayer battle royale
game in which players drop onto an island and fight to be the last one left standing.</Text>
            </View>
            <View>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    padding: 8,
                    margin: 8,
                    borderRadius: 50,
                    borderWidth: 2}} onPress={() => {PUBGAlert()}}>
                        <Text style={{color: 'lightcoral'}}>
                            PUBG Button
                        </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const ChallangeScreen2 = () => {
    const ingfo = () => {
        alert("Ingfo bang")
    }
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E2F0B0'
        }}>
            <View>
                <Text style={{color: 'purple', textDecorationLine: 'underline', textAlign: 'center'}}>IOS</Text>
                <View style={{
                    padding: 10,
                    alignItems: 'center',
                    textAlign: 'center',
                    marginTop: 20,
                    backgroundColor: '#82E7D9',
                    borderRadius: 20,
                    borderStyle: 'dashed',
                    borderWidth: 3,
                }}>
                    <Text style={{textAlign: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>iOS </Text>(formerly iPhone OS) is a mobile operating system created and developed by <Text style={{fontStyle: 'italic', color: 'purple', fontWeight : 'bold'}}>Apple Inc</Text>. exclusively for its hardware. It is the operating system that powers many of the company's mobile devices, including the iPhone and iPod Touch.
                    </Text>
                </View>
            </View>
            <Text style={{margin: 30, fontWeight: 'bold'}}>VS</Text>
            <View>
                <Text style={{color: 'green', textAlign: 'center', textTransform: 'uppercase', textDecorationLine: 'underline'}}>Android</Text>
                <View style={{
                    padding: 10,
                    alignItems: 'center',
                    textAlign: 'center',
                    marginTop: 20,
                    backgroundColor: '#24D6EE',
                    borderRadius: 20,
                    borderStyle: 'dashed',
                    borderWidth: 3,
                }}>
                    <Text style={{textAlign: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>Android </Text>Android is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets. Android is developed by a consortium of developers known as the <Text style={{fontStyle: 'italic', color: 'purple', fontWeight: 'bold'}}>Open Handset Alliance </Text>and commercially sponsored by <Text style={{color: 'purple', fontWeight: 'bold'}}>Google.</Text>
                    </Text>
                    <TouchableOpacity style={{
                    backgroundColor: '#B4F6FF',
                    padding: 8,
                    margin: 8,
                    borderRadius: 50,
                    borderWidth: 2}} onPress={() => {ingfo()}}>
                        <Text style={{color: 'lightcoral'}}>
                            More Information .. 
                        </Text>
                </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}


export default ChallangeScreen2;