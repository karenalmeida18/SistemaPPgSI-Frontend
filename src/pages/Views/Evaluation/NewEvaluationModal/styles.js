import styled from 'styled-components';

export const Container = styled.div(({ theme }) => `
   display: flex;
   flex-direction: column;
   max-height: 100%;
   max-width: 800px;
   font-size: 14px;
   overflow-y: scroll;

   b {
      color: ${theme.gray4};
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
