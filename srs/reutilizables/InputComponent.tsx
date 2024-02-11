import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface InputProps {
  onChangeText: (text: string) => void;
  placeholder: string; 
}

export const InputComponent = ({ onChangeText, placeholder }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder} 
        keyboardType="numeric"
        style={styles.input}
        onChangeText={onChangeText}
      />
      <Text style={styles.validacion}>Por favor, complete este campo.</Text>
    </View>
    //Inge no me desvance el campo de validacion :'v
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
  validacion: {
    color: 'red',
  },
});
