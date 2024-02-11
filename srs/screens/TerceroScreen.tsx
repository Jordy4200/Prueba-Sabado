import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { BodyComponent } from '../reutilizables/BodyComponent';
import { TittleReutilizable } from '../reutilizables/TittleReutilizable';

export const TerceroScreen = () => {
  return (
    <BodyComponent> 
      <View style={styles.container}>
        <Image 
          source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/41/479/desktop-wallpaper-doom-eternal-game-2020-ultra-mobile-doom-cellphone.jpg' }} 
          style={styles.imagen}
        />
        <TittleReutilizable title="Doom eternal"/>
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
  imagen: {
    width: 300,
    height: 500,
    marginBottom: 20
  }
});