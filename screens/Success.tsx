import React, { useEffect } from 'react'
import { Dimensions, View, Text, PixelRatio } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { updateLast, updateName, updatePhone } from '../redux/regSlice';

const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //setting everything back to '' so it's possible to go to the home screen and try the website again
    dispatch(updateLast(''));
    dispatch(updateName(''));
    dispatch(updatePhone(''));
  })

  const navigation = useNavigation();
  return (
    <View style={{display: 'flex', justifyContent: "center", alignItems: 'center', height: '100%'}}>
        
        <Text>Success!</Text>
        <Text style={{textDecorationLine: 'underline'}} onPress={() => navigation.navigate('Home')}>Go back to main screen</Text>
    </View>
  )
}

export default Success