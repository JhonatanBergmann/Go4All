import React, { Component } from "react"
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

let randomHex = () => {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export default class GoFourAll extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    this.state = {
      backgroundColor: randomHex(),
    }
  }

  onClick() {
    console.log('Clicou :)')
    this.setState({ backgroundColor: randomHex() })
  }

  render() {
    return (
      <Container style={{ backgroundColor: randomHex() }}>
        <BackgroundLinearGradient />
        <TitleContainer>
          <Title>Go 4all</Title>
          <VideoGoFourAll />
        </TitleContainer>
        <ButtonContainer>
          <Button onPress={this.onClick}>
            <Ionicons name='color-palette' size={30} color='#FFF' />
          </Button>
          <ModalInstructions />
        </ButtonContainer>
      </Container>
    )
  }
}