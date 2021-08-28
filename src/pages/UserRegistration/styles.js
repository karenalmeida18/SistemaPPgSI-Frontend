import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 64px 16px;
`;

export const FormCard = styled.form`
  padding: 32px 0;
  width: 50%;

  > div {
    margin: 16px 0;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const GridTitle = styled.div`
  font-weight: bold;
  font-size: 20px;

`;

export const GridButton = styled.div`
  display: flex;
  justify-content: flex-end;

  > button {
    width: 100%;
  }
`;

export const FormError = styled.p(({ theme }) => `
  font-weight: bold;
  font-size: 14px;
  color: ${theme.red};
  margin-top: 10px;
  margin-bottom: -10px;
`);
