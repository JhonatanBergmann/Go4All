import React from 'react'
import { useFonts } from 'expo-font'
import { Ubuntu_300Light, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'
import Navigator from './src/Navigator'

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Navigator />
  )
}