import styled from 'styled-components/native';

export const StyledView = styled.View`
background: rgba(255,255,255,0.1)
border-radius: 2px  
border: 1px solid rgba(75,0,130,1);
height: 60px 
padding: 0 15px 
flex-direction: row
align-items: center

  
`;

export const TIinput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(75,0,130,0.4)',
})`
height: 100%
  font-size:20px 
  text-decoration: none
  color: rgba(75,0,130,0.4)
  
`;
