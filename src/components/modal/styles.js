import styled from 'styled-components';

export const Container = styled.div(({ theme }) => `
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  background-color: rgb(118 118 118 / 38%);
`);

export const Content = styled.div(({ theme }) => `
  padding: 10px;
  background-color: ${theme.white};
  box-shadow: ${theme.shadow};
  border-radius: 4px;
  min-width: 400px;
  height: max-content;
  margin-top: 10px;

  @media (max-width: 800px) {
    min-width: 100%;
   }
`);

export const Header = styled.header(({ theme }) => `
   width: 100%;
   display: flex;
   justify-content: space-between;

   > svg {
     cursor: pointer;
     font-size: 20px;
     &:hover {
       color: ${theme.primaryBlue};
     }
   }
`);
