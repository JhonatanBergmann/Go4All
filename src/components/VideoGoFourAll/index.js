import React from 'react'
import { Video } from 'expo-av'

export default function VideoGoFourAll() {
  return (
    <Video
      style={{
        width: 400,
        height: 200,
        borderRadius: 50
      }}
      source={require('../../videos/video360p.mp4')}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode='cover'
      shouldPlay
      isLooping
    />
  )
}