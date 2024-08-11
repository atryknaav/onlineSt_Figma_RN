import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, PixelRatio } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../redux/codeSlice';
import { RootState } from '../../redux/store';

const CodeInput = () => {
  const inputRefs = useRef<Array<TextInput | null>>(Array(7).fill(null));
  const dispatch = useDispatch();
  const codeSlice = useSelector((state: RootState) => state.codeSlice.code);
  const receivedCodeSlice = useSelector((state: RootState) => state.receivedCodeSlice.code);

  const [code, setCode] = useState<string>('');

  const handleChange = (text: string, index: number) => {
    const updatedCode = code.split('');
    updatedCode[index] = text;
    const newCode = updatedCode.join('');
    setCode(newCode);

    if (text) {
      //shifting focus after filling/deleting a slot
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  useEffect(() => {
    dispatch(update(code));
  }, [code, dispatch]);

  return (
    <View style={styles.container}>
      {Array.from({ length: 6 }).map((_, index) => (
        index === 3 ? 
          <View style={{display: 'flex', flexDirection: 'row'}} key={index}>
            <Text style={styles.dash}>-</Text>
            <TextInput
              placeholder='0'
              style={codeSlice === receivedCodeSlice? styles.input : styles.inputInactive}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={(text) => handleChange(text, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
              textAlign="center"
              placeholderTextColor={'#cccecd'}
            />
          </View>
          :
          <TextInput
          placeholder='0'
            key={index}
            style={codeSlice === receivedCodeSlice? styles.input : styles.inputInactive}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(text) => handleChange(text, index)}
            ref={(ref) => (inputRefs.current[index] = ref)}
            textAlign="center"
            placeholderTextColor={'#cccecd'}
          />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  input: {
    height: 60,
    width: 50,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 40,
    color: '#3aa3dc',
    borderColor: '#af97d4'
  },
  inputInactive: {
    color: '#979898',
    height: 60,
    width: 50,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 40,
    fontWeight:600,
    borderColor: '#cccecd'
  },
  dash: {
    fontSize: 40,
    marginRight: 6,
    color: '#cccecd'
  },
  codeDisplay: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default CodeInput;
