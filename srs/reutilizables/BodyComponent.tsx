import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

export const BodyComponent = (props:any) => {
  const { height } = useWindowDimensions();

  return (
    <View style={{
      height: height * 1,
      ...styles.container
    }}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'grey',
    paddingTop: 40
  }
});
