import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
    title:string;
    onPress:()=>void;
}

export const BottonReutilizable = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}
        onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#007AFF',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 5
    },
    buttonText:{
        textAlign:'center',
        color: 'white',
        fontSize: 16,
        fontWeight:'bold'
    }
})