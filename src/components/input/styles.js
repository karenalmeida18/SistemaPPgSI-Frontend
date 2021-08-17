import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
`;

export const Input = styled.input(({ theme }) => `
   padding: 14px 10px;
   background-color: transparent;
   border-radius: 4px;
   border: 1px solid ${theme.gray3};
   outline-color: ${theme.primaryBlue};
   outline-width: thin;

   ::placeholder {
     color: ${theme.gray3};
   }

`);

export const Label = styled.label(({ color, theme }) => `
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
  color: ${color || theme.gray4};
`);
