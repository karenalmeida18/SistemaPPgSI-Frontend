import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
`;

export const Input = styled.input(({ theme, error }) => `
   padding: 14px 10px;
   background-color: transparent;
   border-radius: 4px;
   outline-color: ${theme.primaryBlue};
   outline-width: thin;
   border: 1px solid ${error ? theme.red : theme.gray3};

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

export const Error = styled.label(({ theme }) => `
  font-weight: bold;
  font-size: 14px;
  color: ${theme.red};
  margin-top: 4px;
`);
