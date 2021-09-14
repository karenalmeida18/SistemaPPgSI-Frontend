import styled from 'styled-components';

export const Container = styled.div(({ theme }) => `
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  background-color: rgb(118 118 118 / 38%);
`);

export const Content = styled.div(({ theme }) => `
  padding: 20px;
  background-color: ${theme.white};
  box-shadow: ${theme.shadow};
  border-radius: 4px;
  min-width: 400px;
  height: max-content;
  max-height: 100%;
  margin-top: 10px;
  overflow-y: scroll;

  @media (max-width: 800px) {
    min-width: 100%;
   }
`);

export const Header = styled.header(({ theme }) => `
   width: 100%;
   color: ${theme.primaryBlueDark};
   display: flex;
   justify-content: space-between;
   margin-bottom: 24px;

   > svg {
     cursor: pointer;
     font-size: 20px;
     &:hover {
       color: ${theme.secondaryBlue};
     }
   }
`);
