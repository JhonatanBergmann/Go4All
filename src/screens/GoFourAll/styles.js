import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  align-items: center;
`; 

export const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  font-family: Ubuntu_700Bold;
  color: #FFF;
  background-color: rgba(52, 52, 52, 0.8);
  border-radius: 10px;
  opacity: 0.8;
  width: 200px;
  bottom: 100px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 30px;
  bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
width: 80px;
height: 80px;
border-radius: 40px;
background-color: #0A0AF3;
align-items: center;
justify-content: center;
`;