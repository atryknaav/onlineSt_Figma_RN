import React, { useState } from 'react';
import { Dimensions, PixelRatio, Text, TextInput, View, StyleSheet, TextInputProps } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { updateName } from '../redux/regSlice';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

interface FieldProps {
    name: string;
    state: string;
    setState: ActionCreatorWithPayload<string>
}

const Field = ({ name, state, setState }: FieldProps) => {
    const [value, setValue] = useState<string>('');
     const dispatch = useDispatch();
    //field chnages it's label and placeholder depending on the 'name' provided
    //also impacts the state provided
    const label = name === 'name' ? "Name" : name === 'lastname' ? "Last name" : "Phone number";
    const placeHolder = name === 'name' ? "Enter name" : name === 'lastname' ? "Enter last name" : "+33 222 111 2222";

    const keyboardType: TextInputProps['keyboardType'] = name === 'phone' ? 'numeric' : 'default';

    const formatPhoneNumber = (text: string) => {
        //getting a pretty phone format
        let cleanText = text.replace(/\D/g, '');
        
        if (cleanText.length > 11) {
            cleanText = cleanText.slice(0, 11);
        }
        const formattedText = cleanText
            .replace(/^(\d{2})(\d{0,2})/, '+$1 $2')
            .replace(/(\d{3})(\d{0,3})/, '$1 $2')
            .replace(/(\d{3})(\d{0,4})/, '$1 $2')
            .trim();

        setValue(formattedText);
        dispatch(setState(formattedText));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                
                style={styles.input} 
                placeholder={placeHolder} 
                placeholderTextColor='#d3d3d4'
                keyboardType={keyboardType} 
                value={state}
                onChangeText={text => {
                    if (name === 'phone') {
                        formatPhoneNumber(text);

                    } else {
                        setValue(text);
                        dispatch(setState(text));
                    }
                }}
                maxLength={16} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        marginBottom: Dimensions.get('window').height * 0.03,
    },
    label: {
        paddingLeft: 2,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
    },
    input: {
        borderRadius: 7,
        borderColor: '#d3d3d4',
        borderWidth: 1,
        padding: 6,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    },
});

export default Field;
