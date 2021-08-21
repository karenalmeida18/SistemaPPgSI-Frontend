import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   padding: 10px;
   width: 100%;
   height: 100%;
`;

export const Form = styled.form(({ theme }) => `
   margin-top: 40px;
   padding: 40px 65px;
   display: flex;
   flex-direction: column;
   width: 510px;
   height: max-content;
   box-shadow: ${theme.shadow};
   border: 1px solid ${theme.gray2};
   border-radius: 4px;

   > div {
     margin: 15px 0;
   }

   > button {
     margin-top: 24px;
   }

   @media (max-width: 800px) {
       width: 100%;
       padding: 10px 35px 40px;
   }
`);

export const Header = styled.h2(({ theme }) => `
  text-align: center;
  margin-bottom: 24px;
  color: ${theme.primaryBlueDark};
`);

export const Image = styled.img`
  height: 120px;
  margin: 10px auto;
`;

export const CardFooter = styled.span(({ theme }) => `
  text-align: center;
  padding: 16px 0;

   > a {
    color: ${theme.primaryBlue};
   }
`);
