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
  cursor: pointer;
`;

export const Button = styled.button(({ theme }) => `
  background: ${theme.white};
  color: ${theme.primaryBlue};
  padding: 6px 18px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  transition: all .2s;

  &:hover {
    background: ${theme.primaryBlue};
    color: ${theme.white};
    border: 1px solid ${theme.white};
  }
`);
