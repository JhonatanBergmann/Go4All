import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function BackgroundLinearGradient() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['rgba(0,0,0,0.8)', 'transparent']}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500
      }}
    />
  )
}