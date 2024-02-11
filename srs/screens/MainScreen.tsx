import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BodyComponent } from '../reutilizables/BodyComponent';
import { BottonReutilizable } from '../reutilizables/BottonReutilizable'; 

export const MainScreen = ({ navigation }: any) => {

  return (
    <BodyComponent>
      <View style={styles.container}>
        <Text style={styles.title}>BIENVENIDO!</Text>
        <View style={styles.buttonRow}>
          <BottonReutilizable
            title="Imagen 1"
            onPress={() => navigation.navigate('SecondScreen')}
          />
          <BottonReutilizable
            title="Imagen 2"
            onPress={() => navigation.navigate('TerceroScreen')}
          />
        </View>
        <View style={styles.buttonRow}>
          <BottonReutilizable
            title="Mayor o Igual"
            onPress={() => navigation.navigate('CuartoScreen')}
          />
          <BottonReutilizable
            title="Menor o Igual"
            onPress={() => navigation.navigate('QuintoScreen')}
          />
        </View>
      </View>
    </BodyComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 30
  }
});
