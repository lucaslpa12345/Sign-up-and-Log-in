import styled from 'styled-components/native';

export const Container = styled.View` 
   flex: 1
   justify-content: center 
   align-items: center
 
`;
export const Lista = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})` 
   flex: 1
   margin: 20px 20px 
   width: 320px 
   
  
   overflow: hidden 

`;

export const Title = styled.Text` 
   font-size: 40px
   color:  rgba(75,0,130,0.9)
   
 

`;
