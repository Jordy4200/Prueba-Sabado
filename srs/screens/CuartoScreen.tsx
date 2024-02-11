import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { InputComponent } from '../reutilizables/InputComponent';
import { BodyComponent } from '../reutilizables/BodyComponent';

export const CuartoScreen = () => {
  const [numeros, setNumeros] = useState({ numero1: '', numero2: '' });
  const [resultado, setResultado] = useState('');

  const handleChange = (name: string, value: string) => {
    setNumeros({ ...numeros, [name]: value });
  };

  const Comparacion = () => {
    const { numero1, numero2 } = numeros;
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    setResultado(
      `El número ${num1} ${num1 >= num2 ? 'es mayor o igual que' : 'es menor que'} el número ${num2}`
       
    );
  };

  return (
    <BodyComponent> 
      <View >
        <Text style={styles.titles}>Formulario</Text>
        <InputComponent onChangeText={(text) => handleChange('numero1', text)} placeholder="Ingrese el primer número" />
        <InputComponent onChangeText={(text) => handleChange('numero2', text)} placeholder="Ingrese el segundo número" />
        <Button title=">=" onPress={Comparacion} />
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </BodyComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titles: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
  },
});
