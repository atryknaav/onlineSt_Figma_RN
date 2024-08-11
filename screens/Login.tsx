import React, { useEffect } from 'react';
import { Dimensions, PixelRatio, Text, View, StyleSheet } from 'react-native';
import Field from '../components/Field';
import { useNavigation } from '@react-navigation/native';
import RegButton from '../components/SIgnUp/RegButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { updateLast, updateName, updatePhone } from '../redux/regSlice';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const regPhone = useSelector((state: RootState) => state.regSlice.phone);

  //set 'name' and 'lastname' in redux to ' ' to achieve the 'allowed' state
  useEffect(() => {
    dispatch(updateLast(' '));
    dispatch(updateName(' '));
  })

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Welcome to App
        </Text>
        <Text style={styles.subtitle}>
            Please enter your details.
        </Text>
        <Field name='phone' state={regPhone} setState={updatePhone}/>
        <RegButton name='Continue'/>
        <Text style={styles.signupPrompt}>
          Don't have an account?{` `}
          <Text 
            style={styles.signupLink} 
            onPress={() => navigation.navigate('Signup')}
          >
            Sign up
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
  signupPrompt: {
    textAlign: 'center',
    marginTop: 5,
  },
  signupLink: {
    color: '#46e2a9',
    textDecorationLine: 'underline',
  },
});

export default Login;
