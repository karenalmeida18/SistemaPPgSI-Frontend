import styled from 'styled-components';

export const Box = styled.div(({ theme }) => `
  background-color: ${theme.gray1};
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`);

export const Table = styled.table(({ theme }) => `
  box-shadow: ${theme.shadow};
  border-radius: 4px;
  width: 100%;
  background-color: ${theme.gray2};
`);

export const TableRow = styled.tr(({ theme }) => `
  background-color: ${theme.gray1};

  @media (max-width: 800px) {
     display: flex;
     flex-direction: column;
     border-bottom: 2px solid ${theme.gray2};
   }
`);

export const TableCell = styled.td(({ theme }) => `
    padding: 10px;
    font-size: 14px;
    background-color: ${theme.white};
    color: ${theme.gray4};
    font-weight: 600;
    
    @media (min-width: 800px) {
     .table-mobile {
       display: none;
     }
   }
`);

export const TableHead = styled.th(({ theme, width }) => `
   padding: 10px;
   text-align: left;
   color: ${theme.primaryBlueDark};
   border-bottom: 1px solid ${theme.gray2};
   width: ${width};

   @media (max-width: 800px) {
     display: none;
   }
`);
