import React, { useState } from "react"
import {
  Container,
  TitleContainer,
  Title,
  ButtonContainer,
  Button
} from './styles'
import BackgroundLinearGradient from '../../components/BackgroundLinearGradient'
import ModalInstructions from '../../components/ModalInstructions/index'
import VideoGoFourAll from '../../components/VideoGoFourAll/index'
import { Ionicons } from '@expo/vector-icons'

const randomHex = () => {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export default function GoFourAll() {

  const [state, setState] = useState({ backgroundColor: '#0000ff' })

  function onClick() {
    console.log('Gerando cor aleátoria :)')
    setState({ backgroundColor: randomHex() })
  }

  return (
    <Container style={state}>
      <BackgroundLinearGradient />
      <TitleContainer>
        <Title>Go 4all</Title>
        <VideoGoFourAll />
      </TitleContainer>
      <ButtonContainer>
        <Button onPress={onClick}>
          <Ionicons name='color-palette' size={30} color='#FFF' />
        </Button>
        <ModalInstructions />
      </ButtonContainer>
    </Container>
  )
}