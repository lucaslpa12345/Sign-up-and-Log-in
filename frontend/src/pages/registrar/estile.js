import styled from 'styled-components/native';
import Input from '../../components/inputte/input';
import Buton from '../../components/button/button';

export const TXinput = styled(Input)`
  margin: 10px 20px;
`;

export const Container = styled.KeyboardAvoidingView.attrs({})` 
  flex: 1 
 align-items: center   
justify-content: center 

`;

export const Butao = styled(Buton)``;

export const Forma = styled.View``;

export const ButonChange = styled.TouchableOpacity`
  color: #fffafa; 
  width: 70px
  height: 50px
  justify-content: center
  align-items: center
  border: 1px solid rgba(75,0,130,0.9)
 
  
`;

export const Butoes = styled.View`
flex-direction: row
justify-content: center
align-items: center
`;
