import styled from 'styled-components';

export const Wrapper = styled.div`
   background: ${(props) => props.theme.secondaryBlue};
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px;
   width: 100%;
   height: 100vh;
`;

export const Form = styled.form(({ theme }) => `
   padding: 20px 65px 70px;
   display: flex;
   flex-direction: column;
   width: 500px;
   box-shadow: ${theme.shadow};
   border: 1px solid ${theme.gray2};
   background-color: ${theme.gray1};
   border-radius: 4px;

   > div {
     margin: 10px 0;
   }

   > button {
     margin-top: 24px;
   }

   @media (max-width: 800px) {
       width: 100%;
       padding: 10px 35px 40px;
   }
`);

export const Image = styled.img`
  height: 100px;
  width: 200px;
  margin: 10px auto;
`;
