import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px;
   width: 100%;
   height: 100%;
`;

export const Form = styled.form(({ theme }) => `
   margin-top: 40px;
   padding: 30px;
   display: flex;
   flex-direction: column;
   width: 400px;
   box-shadow: ${theme.shadow};
   border: 1px solid ${theme.gray2};
   background: 1px solid ${theme.gray1};
   border-radius: 4px;

   > div {
     margin: 8px 0;
   }
`);
