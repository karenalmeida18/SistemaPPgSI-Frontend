import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   height: 100%;
   padding: 30px 40px;

   @media (max-width: 1124px) {
      padding: 10px 30px;
   }
`;

export const Header = styled.header(({ theme }) => `
   width: 100%;
   margin: 10px 0;

   > h2 {
      color: ${theme.gray4};
   }
`);

export const Return = styled.div(({ theme }) => `
  position: absolute;
  left: 12px;
  top: 68px;
  color: ${theme.primaryBlue};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  align-items: center;

  span {
    padding: 0 16px;
  }
`);
