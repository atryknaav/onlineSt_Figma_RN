import React, { useEffect } from 'react';
import { Dimensions, PixelRatio, Text, View, StyleSheet } from 'react-native';
import SignUpForm from '../components/SIgnUp/SignUpForm';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { updateLast, updateName, updatePhone } from '../redux/regSlice';

const Signup = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    //set every field to '' whenever the user opens the screen
    dispatch(updateLast(''));
    dispatch(updateName(''));
    dispatch(updatePhone(''));
  })

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Welcome to App
        </Text>
        <Text style={styles.subtitle}>
            Please enter your details.
        </Text>
        <SignUpForm />
        <Text style={styles.loginPrompt}>
          Do you have an account? {` `}
          <Text 
            style={styles.loginLink} 
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Text>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: Dimensions.get('window').height * 0.15,
    paddingHorizontal: Dimensions.get('window').width * 0.1,
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  subtitle: {
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    color: '#787879',
    marginBottom: Dimensions.get('window').height * 0.05,
    marginTop: 5,
  },
  loginPrompt: {
    textAlign: 'center',
    marginTop: 5,
  },
  loginLink: {
    color: '#46e2bf',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});

export default Signup;
