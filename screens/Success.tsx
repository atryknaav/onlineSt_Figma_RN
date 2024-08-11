import React from 'react'
import { Dimensions, View, Text, PixelRatio } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Success = () => {
  const navigation = useNavigation();
  return (
    <View style={{display: 'flex', justifyContent: "center", alignItems: 'center', height: '100%'}}>
        
        <Text>Success!</Text>
        <Text style={{textDecorationLine: 'underline'}} onPress={() => navigation.navigate('Home')}>Go back to main screen</Text>
    </View>
  )
}

export default Success