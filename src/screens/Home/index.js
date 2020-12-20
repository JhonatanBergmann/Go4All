import React from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Container, Image } from './styles'
import BackgroundLinearGradient from '../../components/BackgroundLinearGradient/index'
import ButtonLinearGradient from '../../components/ButtonLinearGradient/index'

export default function Home() {
  const navigation = useNavigation()
  return (
    <Container>
      <StatusBar hidden={true} />
      <BackgroundLinearGradient />
      <Image source={require('../../imgs/logo.png')} />
      <ButtonLinearGradient onClick={() => navigation.navigate('GoFourAll')} />
    </Container>
  )
}