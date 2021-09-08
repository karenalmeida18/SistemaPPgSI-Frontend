import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Header = styled.header`
  width: 100%;
  margin: 16px auto;
  text-align: center;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const Icon = styled.div(({ theme }) => `
  background: ${theme.primaryBlue};
  border-radius: 100%;
  margin: 6px auto 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;

  > svg {
    font-size: 16pt;
    fill: ${theme.white};
  }
`);

export const Card = styled.div(({ theme }) => `
  text-align: center;
  border: 1px solid ${theme.gray2};
  box-shadow: ${theme.shadow};
  padding: 20px 10px;
  border-radius: 4px;
  width: 400px;
  color: ${theme.black};
  cursor: pointer;
  transition: all 0.2s;
  margin: 10px;

  > svg {
    font-size: 40pt;
    border: 1px solid ${theme.white};
    background: ${theme.primaryBlue};
    border-radius: 100%;
    fill: ${theme.white};
    padding: 12px;
    margin-bottom: 16px;
  }

  > p {
    font-weight: 500px;
    font-size: 16px;
    margin: 18px auto;
    max-width: 300px;
  }
  
  &:hover {
    box-shadow: ${theme.shadow3};
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;

    > p {
      font-size: 14px;
    }
  }
`);
