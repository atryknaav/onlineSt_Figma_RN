import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ConfirmCodeButton = ({ name }: { name: string}) => {
    const navigation = useNavigation();
    const codeSlice = useSelector((state: RootState) => state.codeSlice.code);
    const receivedCodeSlice = useSelector((state: RootState) => state.receivedCodeSlice.code);
  return (
    <TouchableOpacity 
      style={ codeSlice === receivedCodeSlice?
        styles.button
        :
        styles.buttonInactive 
       
      }
      onPress={() => {if(codeSlice === receivedCodeSlice)navigation.navigate('Success')}}
    >
      <Text style={[styles.text, { color: 'white' }]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#3aa3dc'
  },
  buttonInactive: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#A8CDE2'

  },
  text: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
    fontWeight: '500'
  },
});

export default ConfirmCodeButton;