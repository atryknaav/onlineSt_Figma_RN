import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, PixelRatio } from 'react-native';

const ConfirmCodeButton = ({ name, textColor, backgroundColor, border }: { name: string; textColor: string; backgroundColor: string; border: boolean }) => {
    const navigation = useNavigation();
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
      onPress={() => navigation.navigate('Success')}
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