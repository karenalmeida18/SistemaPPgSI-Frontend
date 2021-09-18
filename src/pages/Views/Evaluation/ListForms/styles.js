import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;

  > p {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const Header = styled.header(({ theme }) => `
  width: 100%;
  margin: 16px auto;
  text-align: center;
  
  > h3 {
    color: ${theme.black};
  }

  > h4 {
    color: ${theme.gray4};
    margin-top: 8px;
  }
`);

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const Card = styled.div(({ theme, enabled }) => `
  text-align: center;
  border: 1px solid ${theme.gray2};
  box-shadow: ${theme.shadow};
  padding: 20px;
  border-radius: 4px;
  color: ${theme.black};
  cursor: pointer;
  transition: all 0.2s;
  margin: 10px;
  border-left: 1px solid ${theme.purple};
  position: relative;
  min-height: 200px;
  width: 170px;
  background-color: ${!enabled && theme.gray2};
  color: ${enabled ? theme.purple : theme.black};

  > svg {
    font-size: 40pt;
    fill: ${enabled ? theme.purple : theme.gray4};
    margin-top: 30px;
  }

  > p {
    font-size: 16px;
    max-width: 300px;
    background: ${enabled ? theme.primaryBlue : theme.gray4};
    width: 100%;
    position: absolute;
    left: 0;
    color: white;
    font-weight: 700;
    bottom: 10px;
  }
  
  &:hover {
    box-shadow: ${theme.shadow3};
  }

  @media (max-width: 800px) {
    padding: 10px;
    font-size: 16px;

    > p {
      font-size: 14px;
    }
  }
`);
