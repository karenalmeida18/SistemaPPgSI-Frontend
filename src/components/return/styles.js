import styled from 'styled-components';

export const Container = styled.div(({ theme }) => `
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
