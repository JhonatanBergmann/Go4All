import React, { useState } from 'react'
import { Alert, Modal } from 'react-native'
import {
  CenteredView,
  ModalView,
  OpenButton,
  TextButton,
  ModalText,
  InstructionContainer
} from './styles'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

export default function ModalInstructions() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <CenteredView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Você precisa clicar em fechar para voltar.')
        }}>
        <CenteredView>
          <ModalView>
            <ModalText>Para gerar cores aleatórias de fundo, clique no botão:</ModalText>
            <Ionicons style={{ margin: 20 }} name='color-palette' size={30} color='#FFF' />
            <OpenButton style={{ paddingHorizontal: 10 }}
              onPress={() => { setModalVisible(!modalVisible) }}>
              <TextButton>Fechar</TextButton>
            </OpenButton>
          </ModalView>
        </CenteredView>
      </Modal>
      <OpenButton onPress={() => { setModalVisible(true) }}>
        <InstructionContainer>
          <TextButton>Gerar Cor</TextButton>
          <AntDesign name='questioncircleo' size={10} color='#FFF' />
        </InstructionContainer>
      </OpenButton>
    </CenteredView>
  )
}