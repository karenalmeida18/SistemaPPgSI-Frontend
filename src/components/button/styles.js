import styled from 'styled-components';
import { rotate } from '../../styles/animations';

export const StyledButton = styled.button(({ theme, bgColor, textColor }) => `
   display: flex;
   justify-content: center;
   border: 0;
   padding: 14px 8px;
   border-radius: 4px;
   background-color: ${theme[bgColor] || theme.primaryBlue};
   color: ${theme[textColor] || theme.white};
   font-size: 16px;
   font-weight: bold;
   transition: all .2s;

   &:hover, &:disabled {
     background-color: #80ccd6 ;
   }

`);

export const LoadingWrapper = styled.div`
   animation: ${rotate} 2s linear infinite;
   margin-left: 8px;
`;
