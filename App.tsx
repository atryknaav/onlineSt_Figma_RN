import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/SignUp';
import Success from './screens/Success';
import ConfirmCode from './screens/ConfirmCode';
import StoreProvider from './redux/StoreProvider';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StoreProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home Screen',   headerShown: false}} />
        <Stack.Screen name="Confirm" component={ConfirmCode} options={{ title: 'Confirm your phone number', headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Sign up',  headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false}} />
        <Stack.Screen name="Success" component={Success} options={{ title: 'Success!', headerShown: false}} />
      
      </Stack.Navigator>
    </NavigationContainer>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
