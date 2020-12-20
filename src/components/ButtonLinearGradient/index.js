import React from 'react'
import { Button, TextButton } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'

export default function ButtonLinearGradient(props) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#4C669F', '#0A0AF3']} style={{ borderRadius: 10 }}>
      <Button onPress={props.onClick}>
        <TextButton>Play</TextButton>
        <AntDesign name='playcircleo' size={10} color='#FFF' />
      </Button>
    </LinearGradient>
  )
}