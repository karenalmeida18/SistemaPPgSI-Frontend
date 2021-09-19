import styled from 'styled-components';

export const Container = styled.div(({ theme }) => `
   display: flex;
   flex-direction: column;
   max-height: 100%;
   font-size: 14px;

   b {
      color: ${theme.gray4};
   }

   @media (max-width: 800px) {
      width: 100%;
      height: 100%;
   }

   > p {
     margin-bottom: 16px;
  }

`);

export const Header = styled.header(({ theme }) => `
   display: grid;
   grid-template-columns: 1fr 1fr;
   background-color: ${theme.secondaryBlueLight};
   width: 100%;
   margin-bottom: 18px;
   border-radius: 4px;
   padding: 10px;

   > p {
      margin: 5px 0;
   }

   @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
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
  grid-gap: 10px;
  padding-bottom: 10px;

  > div {
     margin-bottom: 10px;
  }
`);

export const FormError = styled.p(({ theme }) => `
  font-weight: bold;
  font-size: 14px;
  color: ${theme.red};
  margin-top: 10px;
  margin-bottom: -20px;
`);
