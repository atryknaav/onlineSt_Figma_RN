import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

interface CodeInputProps {
  onCodeComplete: (code: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ onCodeComplete }) => {
  const [values, setValues] = useState<string[]>(Array(6).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const inputRefs = useRef<Array<TextInput | null>>(Array(6).fill(null));

  const formatValue = (value: string, index: number): string => {
    const parts = [...values];
    parts[index] = value;
    const joined = parts.join('');
    return joined.slice(0, 3) + (joined.length > 3 ? '-' : '') + joined.slice(3);
  };

  const handleChange = (text: string, index: number) => {
    const newValues = [...values];
    newValues[index] = text.replace(/\D/, ''); 
    setValues(newValues);


    const formattedValue = formatValue(newValues[index], index);

   
    if (text.length > 0 && index < 5) {
      setFocusedIndex(index + 1);
    }


    if (newValues.join('').length === 6) {
      onCodeComplete(newValues.join(''));
    }
  };

  useEffect(() => {
    if (inputRefs.current[focusedIndex]) {
      inputRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  return (
    <View style={styles.container}>
      {values.map((value, index) => (
        <TextInput
          key={index}
          style={[
            styles.input,
            { borderColor: focusedIndex === index ? 'blue' : '#ccc' },
          ]}
          value={formatValue(value, index)}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(text) => handleChange(text, index)}
          ref={(ref) => (inputRefs.current[index] = ref)}
          onFocus={() => setFocusedIndex(index)}
          onBlur={() => setFocusedIndex(-1)}
          textAlign="center"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 40,
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 2,
    fontSize: 18,
    padding: 0,
  },
});

export default CodeInput;
