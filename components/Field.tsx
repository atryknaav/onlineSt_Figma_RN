import React from 'react'
import { Dimensions, PixelRatio, Text, TextInput, View } from 'react-native'

const Field = ({name}: {name: string}) => {
    const label = name === 'name'? "Name" : name === 'lastname'? "Last name" : "Phone number";
    const placeHolder = name === 'name'? "Enter name" : name === 'lastname'? "Enter last name" : "+33 222 111 2222";

  return (
    <View style={{display: 'flex', flexDirection: 'column', gap: 2, marginBottom: Dimensions.get('window').height*0.03}}>
    <Text style={{paddingLeft: 2, fontSize: PixelRatio.getPixelSizeForLayoutSize(5)}}>{label}</Text>
       <TextInput style={{ borderRadius: 7, borderColor: '#d3d3d4', borderWidth: 1, padding: 6, fontSize: PixelRatio.getPixelSizeForLayoutSize(7)}} placeholder={placeHolder} placeholderTextColor={'#d3d3d4'}/> 
    </View>
  )
}

export default Field