import styled from 'styled-components';

export const Container = styled.div(({ theme }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  padding: 0 32px;

  width: 100%;
  background: ${theme.secondaryBlue};
`);

export const LogoUSP = styled.img`
  height: 100%;
`;

export const GridOptions = styled.nav`

`;
