import styled from 'styled-components';

export const Container = styled.div(({ theme }) => `
   display: flex;
   flex-direction: column;
   max-height: 100%;
   min-width: 600px;
   font-size: 14px;

   b {
      color: ${theme.gray4};
   }

   @media (max-width: 800px) {
     min-width: 100%;
   }
`);

export const Header = styled.header(({ theme }) => `
   display: flex;
   width: 100%;
   margin-bottom: 18px;

   > p {
      &:last-child {
         margin-left: 16px;
      }
   }
`);

export const Subtitle = styled.h4(({ theme }) => `
  font-size: 12px;
  color: ${theme.gray3};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-bottom: 8px;
`);

export const Form = styled.form(({ theme }) => `
   display: flex;
   flex-direction: column;

   > div {
     margin: 8px 0;

     > label {
        font-size: 14px;
     }
   }

   > button {
     margin-top: 24px;
   }
`);
