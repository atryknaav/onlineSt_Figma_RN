import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ConfirmCodeButton = ({ name, textColor, backgroundColor, border }: { name: string; textColor: string; backgroundColor: string; border: boolean }) => {
    const navigation = useNavigation();
    const codeSlice = useSelector((state: RootState) => state.codeSlice.code);
    const receivedCodeSlice = useSelector((state: RootState) => state.receivedCodeSlice.code);
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { 
          backgroundColor: backgroundColor, 
          borderWidth: border ? 1 : 0, 
          borderColor: border ? '#9b9b9e' : 'transparent'
        }
      ]}
      onPress={() => {if(codeSlice === receivedCodeSlice)navigation.navigate('Success')}}
    >
      <Text style={[styles.text, { color: textColor }]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  text: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
    fontWeight: '500'
  },
});

export default ConfirmCodeButton;