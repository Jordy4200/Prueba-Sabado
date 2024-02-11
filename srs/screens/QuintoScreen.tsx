import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { InputComponent } from '../reutilizables/InputComponent';

export const QuintoScreen = () => {
  const [numeros, setNumeros] = useState({ numero1: '', numero2: '' });
  const [resultado, setResultado] = useState('');

  const handleChange = (name: string, value: string) => {
    setNumeros({ ...numeros, [name]: value });
  };

  const handleComparacion = () => {
    const { numero1, numero2 } = numeros;
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    setResultado(
      `El número ${num1} ${num1 <= num2 ? 'es menor o igual que' : 'es mayor que'} el número ${num2}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario</Text>
      <InputComponent
        onChangeText={(text) => handleChange('numero1', text)}
        placeholder="Ingrese el primer número"
      />
      <InputComponent
        onChangeText={(text) => handleChange('numero2', text)}
        placeholder="Ingrese el segundo número"
      />
      <Button title="<=" onPress={handleComparacion} />
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
  },
});
