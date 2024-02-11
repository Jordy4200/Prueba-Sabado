import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { BodyComponent } from '../reutilizables/BodyComponent';

export const TerceroScreen = () => {
  return (
    <BodyComponent> 
      <View style={styles.container}>
        <Image 
          source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/41/479/desktop-wallpaper-doom-eternal-game-2020-ultra-mobile-doom-cellphone.jpg' }} // URL de la imagen
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