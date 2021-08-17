import styled from 'styled-components';

const StyledButton = styled.button(({ theme, bgColor, textColor }) => `
   border: 0;
   padding: 14px 8px;
   border-radius: 4px;
   background-color: ${theme[bgColor] || theme.primaryBlue};
   color: ${theme[textColor] || theme.white};
   font-size: 16px;
   font-weight: bold;
   transition: all .2s;

   &:hover {
     background-color: #2f9eaf ;
   }
`);

export default StyledButton;
