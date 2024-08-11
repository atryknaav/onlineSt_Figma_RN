import React from 'react'
import { Dimensions, PixelRatio, Text, View } from 'react-native'
import SignUpForm from '../components/SIgnUp/SignUpForm';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  return (

    <View style={{display: 'flex', flexDirection: 'column', marginTop: Dimensions.get('window').height*0.15, paddingHorizontal: Dimensions.get('window').width*0.1}}>
        <Text style={{alignItems: 'center', textAlign: 'center', fontWeight: 700, fontSize: PixelRatio.getPixelSizeForLayoutSize(10)}}>
            Welcome to App
        </Text>
        <Text style={{alignItems: 'center', textAlign: 'center', fontWeight: 400, fontSize: PixelRatio.getPixelSizeForLayoutSize(7), color: '#787879', marginBottom: Dimensions.get('window').height*0.05, marginTop: 5}}>
            Please enter your details.
        </Text>
        <SignUpForm />
        <Text style={{textAlign: 'center', marginTop: 5}}>
          Do you have an account? <Text style={{color: '#46e2bf', textDecorationLine: 'underline', fontWeight: 500}} onPress={() => navigation.navigate('Login')}>Login</Text>
        </Text>
    </View>
  )
}
// }PixelRatio.getPixelSizeForLayoutSize(8)

export default Signup