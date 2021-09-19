import styled from 'styled-components';

export const Container = styled.div(({ theme }) => `
   display: flex;
   flex-direction: column;
   max-height: 100%;
   width: 600px;
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

  .button-plus {
   margin-left: 10px;
     > button {
        padding: 4px 16px;
     }
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

export const Question = styled.header(({ theme }) => `
   margin-bottom: 10px;
`);

export const Subtitle = styled.h4(({ theme }) => `
  font-size: 12px;
  color: ${theme.gray3};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-bottom: 8px;
`);

export const Form = styled.form(({ theme }) => `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding-bottom: 10px;

  @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
   }
`);

export const ContainerButton = styled.div(({ theme }) => `
  display: flex;
  justify-content: flex-end;
  margin: 16px 0;
  width: 100%;
  grid-column: 1/3;

  button {
    margin: 0 8px;
    font-size: 14px;
    padding: 10px;
    margin-top: -5px;
    transition: all .2s;

    &:first-child {
       background-color: ${theme.white};
       color: ${theme.primaryBlue};
       border: 1px solid ${theme.primaryBlue};

       &:hover {
         background-color: ${theme.secondaryBlue};
         color: ${theme.white};
       }
    }
  }
`);
