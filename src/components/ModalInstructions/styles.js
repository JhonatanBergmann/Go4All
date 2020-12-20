import styled from 'styled-components/native'

export const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalView = styled.View`
  background-color: #0A0AF3;
  border-radius: 20px;
  padding: 50px;
  align-items: center;
  opacity: 0.9;
  top: 15px;
`;

export const OpenButton = styled.TouchableOpacity`
  top: 3px;
  background-color: rgba(52, 52, 52, 0.8);
  opacity: 0.8;
  padding: 5px;
  border-radius: 10px;
  margin-horizontal: 10px;
`;

export const TextButton = styled.Text`
  text-align: center;
  font-size: 15px;
  right: 1px;
  color: #FFF;
  font-family: Ubuntu_300Light;
`;

export const ModalText = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #FFF;
  font-family: Ubuntu_300Light;
`

export const InstructionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;