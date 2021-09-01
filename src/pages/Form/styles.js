import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 18px;
`;

export const Title = styled.h1(({ theme }) => `
  font-weight: bold;
  color: ${theme.primaryBlue};

  margin-top: 32px;
`);

export const Form = styled.div(({ theme }) => `
  width: 50%;

  margin-top: 32px;

  > div {
    margin-top: 24px;
  }
`);
