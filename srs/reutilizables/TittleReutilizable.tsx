import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'

interface TitleProps{
    title: string;
}


export const TittleReutilizable = ({title}:TitleProps) => {
    const {height}=useWindowDimensions();
    return (
      <View>
          <Text style={{...styles.title}}>{title}</Text>
      </View>
    )
  }
  
  const styles=StyleSheet.create({
      title:{
          color:'#73210F',
          fontSize:27,
          fontWeight:'bold',
          paddingHorizontal:30,
          paddingVertical:30
      }
  })
