import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface InputProps {
  onChangeText: (text: string) => void;
  placeholder: string; 
}

export const InputComponent = ({ onChangeText, placeholder }: InputProps) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleTextChange = (text: string) => {
    onChangeText(text);
    if (text.trim() === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder} 
        keyboardType="numeric"
        style={styles.input}
        onChangeText={handleTextChange}
      />
      {isEmpty && <Text style={styles.validation}>Por favor, complete este campo.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  validation: {
    color: 'red',
  },
});
