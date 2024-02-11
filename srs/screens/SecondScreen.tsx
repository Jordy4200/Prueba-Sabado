import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { BodyComponent } from '../reutilizables/BodyComponent';

export const SecondScreen = () => {
  return (
    <BodyComponent> 
      <View style={styles.container}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/736x/1c/9c/9a/1c9c9aec9be45bc9ac4e66921c76cb1b.jpg' }} // URL de la imagen
          style={styles.image} // Estilo para la imagen
        />
        <Text>Doom Eternal</Text>
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
  image: {
    width: 300,
    height: 500,
    marginBottom: 20
  }
});
