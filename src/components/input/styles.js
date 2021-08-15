import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
`;

export const Input = styled.input(({ theme }) => `
   padding: 12px 4px;
   border: 1px solid ${theme.gray3};
   outline-color: ${theme.primaryBlue};
   outline-width: thin;
`);

export const Label = styled.label(({ color, theme }) => `
  font-weight: 600;
  margin-bottom: 4px;
  color: ${color || theme.gray4};
`);
